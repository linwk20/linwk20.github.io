import * as THREE from '../vendor/three/three.module.min.js';
const assetCache = new Map();

export function createPreviewEyewear() {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({color:0x555d58,metalness:.85,roughness:.24});
  const glass = new THREE.MeshPhysicalMaterial({color:0xedfff6,roughness:.06,transmission:.95,thickness:.07,ior:1.45,iridescence:.25});
  const shape = new THREE.Shape();
  shape.moveTo(-.36,-.32);shape.lineTo(.36,-.32);shape.quadraticCurveTo(.51,-.32,.51,-.15);shape.lineTo(.51,.16);shape.quadraticCurveTo(.51,.32,.36,.32);shape.lineTo(-.36,.32);shape.quadraticCurveTo(-.51,.32,-.51,.16);shape.lineTo(-.51,-.15);shape.quadraticCurveTo(-.51,-.32,-.36,-.32);
  const lensGeometry = new THREE.ExtrudeGeometry(shape,{depth:.04,bevelEnabled:true,bevelSize:.012,bevelThickness:.01,bevelSegments:3,curveSegments:16});
  function tube(points,radius,closed=false) {
    const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),closed);
    const object=new THREE.Mesh(new THREE.TubeGeometry(curve,closed?80:32,radius,8,closed),metal);group.add(object);
  }
  for(const side of [-1,1]) {
    const cx=side*.62;
    const lens=new THREE.Mesh(lensGeometry,glass);lens.position.set(cx,.04,.03);group.add(lens);
    tube(shape.getPoints(20).slice(0,-1).map(p=>[p.x+cx,p.y+.04,.04]),.025,true);
    tube([[side*1.13,.2,.04],[side*1.22,.18,-.2],[side*1.24,.15,-1.02],[side*1.16,.01,-1.18]],.033);
    const hinge=new THREE.Mesh(new THREE.BoxGeometry(.11,.13,.22),metal);hinge.position.set(side*1.15,.19,-.07);group.add(hinge);
  }
  tube([[-.11,.19,.04],[0,.24,.06],[.11,.19,.04]],.024);
  return group;
}

export async function createMiniViewer(panel, portrait = false) {
  const canvas=panel.querySelector('canvas');
  const status=panel.querySelector('.mini-model-status');
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(34,1,.05,50);
  const ambient=new THREE.HemisphereLight(0xfff7ed,0x68747c,2.4);scene.add(ambient);
  const key=new THREE.DirectionalLight(0xfff2e4,3);key.position.set(-3,4,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0xe8f1ff,2);rim.position.set(4,2,-3);scene.add(rim);
  const studio=new THREE.Scene();studio.background=new THREE.Color(0xb8b9b5);
  for(const [p,s] of [[[-4,5,3],[3,4,.1]],[[4,2,0],[3,5,.1]],[[0,4,-4],[5,1,.1]]]) {
    const light=new THREE.Mesh(new THREE.BoxGeometry(...s),new THREE.MeshBasicMaterial({color:new THREE.Color().setScalar(3)}));light.position.set(...p);light.lookAt(0,0,0);studio.add(light);
  }
  const pmrem=new THREE.PMREMGenerator(renderer),environment=pmrem.fromScene(studio,.06);
  scene.environment=environment.texture;pmrem.dispose();studio.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});

  let model;
  try {
    if(panel.dataset.model) {
      if(!assetCache.has(panel.dataset.model))assetCache.set(panel.dataset.model,import('../vendor/three/GLTFLoader.js').then(({GLTFLoader})=>new GLTFLoader().loadAsync(panel.dataset.model)));
      const gltf=await assetCache.get(panel.dataset.model);
      model=gltf.scene.clone(true);
      model.traverse(o=>{if(o.isMesh){o.geometry=o.geometry.clone();o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();}});
    } else model=createPreviewEyewear();
  } catch(error) {environment.dispose();renderer.dispose();throw error;}
  const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
  if(!Number.isFinite(size.length())||size.length()===0){environment.dispose();renderer.dispose();throw new Error('Empty 3D model');}
  const scale=(portrait?2.5:2.7)/(portrait?size.y:Math.max(size.x,size.y,size.z));
  model.scale.multiplyScalar(scale);model.position.sub(center.multiplyScalar(scale));
  const root=new THREE.Group();root.add(model);scene.add(root);
  const fittedBounds = new THREE.Box3().setFromObject(model);
  const overlayMaterials=[];
  if(!portrait) {
    // A toy AR overlay for explaining blur/brightness, not a paper result.
    for(const side of [-1,1]) {
      const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,
        uniforms:{brightness:{value:.8},softness:{value:.003}},
        vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader:'precision mediump float; varying vec2 vUv; uniform float brightness; uniform float softness; void main(){vec2 p=vUv-0.5;float circle=abs(length(p)-0.19);float crosshair=min(abs(p.x),abs(p.y));float glow=1.0-smoothstep(0.01,0.015+softness,circle);glow=max(glow,(1.0-smoothstep(0.004,0.008+softness,crosshair))*(1.0-smoothstep(0.08,0.12,length(p))));gl_FragColor=vec4(1.0,0.57,0.20,glow*brightness);}'
      });
      const display=new THREE.Mesh(new THREE.PlaneGeometry(.75,.49),material);display.position.set(side*.62,.04,fittedBounds.max.z+.035);root.add(display);overlayMaterials.push(material);
    }
  }
  let frame=0,active=!panel.hidden,visible=true,lost=false,drag=null;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  // Tripo exports this portrait facing +X; the glasses keep their existing view.
  const initial={yaw:portrait?Math.PI/2:.35,pitch:portrait?0:.16};
  let current={...initial},target={...initial};
  function requestDraw(){if(!frame&&active&&visible&&!document.hidden&&!lost)frame=requestAnimationFrame(tick);}
  function tick(){
    frame=0;if(!active||!visible||document.hidden||lost)return;
    let moving=false;
    for(const k of ['yaw','pitch']){const d=target[k]-current[k];if(Math.abs(d)>.0002){current[k]+=d*(reduced.matches?1:.2);moving=true;}else current[k]=target[k];}
    const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;
    const ratio=renderer.getPixelRatio();if(canvas.width!==Math.round(w*ratio)||canvas.height!==Math.round(h*ratio))renderer.setSize(w,h,false);
    camera.aspect=w/h;camera.updateProjectionMatrix();
    const distance=(portrait?4.4:3.0)*Math.max(1,.95/camera.aspect);
    camera.position.set(Math.sin(current.yaw)*Math.cos(current.pitch)*distance,Math.sin(current.pitch)*distance,Math.cos(current.yaw)*Math.cos(current.pitch)*distance);camera.lookAt(0,0,0);
    renderer.render(scene,camera);if(moving)requestDraw();
  }
  function setActive(next){active=next;if(!next){cancelAnimationFrame(frame);frame=0;drag=null;}else{visible=true;requestDraw();}}
  function reset(immediate=false){target={...initial};if(immediate)current={...initial};requestDraw();}
  function setWireframe(enabled){model.traverse(o=>{if(o.isMesh){const list=Array.isArray(o.material)?o.material:[o.material];list.forEach(m=>{m.wireframe=enabled;});}});requestDraw();}
  function setEffect(value){const lowPower=panel.dataset.paper==='lin2026lowpowar';overlayMaterials.forEach(m=>{m.uniforms.brightness.value=lowPower?value/100:.85;m.uniforms.softness.value=lowPower?.003:.003+value/100*.10;});requestDraw();}
  function theme(){const dark=document.documentElement.getAttribute('data-theme')==='dark';ambient.intensity=dark?2:2.4;renderer.toneMappingExposure=dark?1.3:1.15;requestDraw();}
  canvas.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,yaw:target.yaw,pitch:target.pitch};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(drag?.id!==e.pointerId)return;target.yaw=drag.yaw-(e.clientX-drag.x)*.009;target.pitch=THREE.MathUtils.clamp(drag.pitch+(e.clientY-drag.y)*.006,-.7,.7);requestDraw();});
  function release(e){if(drag?.id!==e.pointerId)return;drag=null;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);}
  ['pointerup','pointercancel','lostpointercapture'].forEach(name=>canvas.addEventListener(name,release));
  canvas.addEventListener('keydown',e=>{const move={ArrowLeft:[-.12,0],ArrowRight:[.12,0],ArrowUp:[0,.1],ArrowDown:[0,-.1]}[e.key];if(move){e.preventDefault();target.yaw+=move[0];target.pitch=THREE.MathUtils.clamp(target.pitch+move[1],-.7,.7);requestDraw();}if(e.key==='Home'){e.preventDefault();reset();}});
  const resize=new ResizeObserver(requestDraw);resize.observe(canvas);
  const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)requestDraw();else{cancelAnimationFrame(frame);frame=0;}});intersection.observe(panel);
  const mutation=new MutationObserver(theme);mutation.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else requestDraw();};document.addEventListener('visibilitychange',visibility);
  reduced.addEventListener('change',requestDraw);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;setActive(false);status.textContent='3D paused by your browser. Select Paper to return.';status.hidden=false;});
  function dispose(){setActive(false);resize.disconnect();intersection.disconnect();mutation.disconnect();document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',requestDraw);scene.traverse(o=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());});environment.dispose();renderer.dispose();}
  window.addEventListener('pagehide',e=>{if(e.persisted){cancelAnimationFrame(frame);frame=0;}else dispose();});window.addEventListener('pageshow',requestDraw);
  status.hidden=true;theme();requestDraw();
  return {setActive,reset,setEffect,setWireframe,dispose};
}
