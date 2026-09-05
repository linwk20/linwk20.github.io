// Scroll-linked silver stars at night and softly reflected warm light by day.
(() => {
  "use strict";

  const canvas = document.getElementById("ambient-field-canvas");
  const context = canvas && canvas.getContext("2d", { alpha: true });
  if (!context) return;
  const navbarCanvas = document.getElementById("navbar-field-canvas");
  const navbarContext = navbarCanvas && navbarCanvas.getContext("2d", { alpha: true });
  const footerCanvas = document.getElementById("footer-field-canvas");
  const footerContext = footerCanvas && footerCanvas.getContext("2d", { alpha: true });

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const footer = document.querySelector("footer .container");
  const control = document.createElement("button");
  const storageKey = "ambient-field-paused";
  let paused = false;
  try { paused = sessionStorage.getItem(storageKey) === "true"; } catch (_) { /* Storage is optional. */ }

  control.type = "button";
  control.className = "ambient-motion-toggle";
  if (footer) footer.appendChild(control);

  let width = 0;
  let height = 0;
  let navbarWidth = 0;
  let navbarHeight = 0;
  let footerWidth = 0;
  let footerHeight = 0;
  let footerVisible = !("IntersectionObserver" in window);
  let particles = [];
  let sprites = [];
  let dark = false;
  let frame = 0;
  let resizeTimer;
  let pageVisible = true;
  let parallaxOffset = Math.max(0, window.scrollY || 0);

  // Cache broad, soft light fields: no lines, rings or small particle shapes.
  const reflectionTextures = [true, false].map((bright) => {
    const texture = document.createElement("canvas");
    texture.width = texture.height = 192;
    const brush = texture.getContext("2d");
    const light = brush.createRadialGradient(96, 96, 0, 96, 96, 96);
    const color = bright ? "255,255,255" : "153,123,89";
    const strength = bright ? 0.8 : 0.09;
    light.addColorStop(0, `rgba(${color},${strength})`);
    light.addColorStop(0.35, `rgba(${color},${strength * 0.6})`);
    light.addColorStop(0.72, `rgba(${color},${strength * 0.14})`);
    light.addColorStop(1, `rgba(${color},0)`);
    brush.fillStyle = light;
    brush.fillRect(0, 0, 192, 192);
    return texture;
  });

  function drawReflections(paint, fieldWidth, fieldHeight, region) {
    if (fieldWidth <= 0 || fieldHeight <= 0) return;
    const time = parallaxOffset * 0.0015;
    paint.save();
    paint.globalAlpha = 1;
    if (region === "page") {
      const reach = Math.min(270, Math.max(94, fieldWidth * 0.19));
      for (const side of [-1, 1]) {
        for (let i = 0; i < 4; i += 1) {
          const phase = i * 2.399 + side * 0.8;
          const centerX = (side < 0 ? 0 : fieldWidth) - side * reach * (0.08 + 0.2 * Math.sin(time * 0.7 + phase));
          const centerY = fieldHeight * (i + 0.2) / 3.5 + Math.sin(time + phase) * fieldHeight * 0.1;
          const rx = reach * (1 + Math.sin(time * 0.6 + phase) * 0.18);
          const ry = Math.max(135, fieldHeight * 0.3);
          paint.drawImage(reflectionTextures[i % 3 === 0 ? 1 : 0], centerX - rx, centerY - ry, rx * 2, ry * 2);
        }
      }
    } else {
      paint.globalAlpha = region === "navbar" ? 0.3 : 0.65;
      for (let i = 0; i < 5; i += 1) {
        const phase = i * 2.399;
        const cx = fieldWidth * (i + 0.5) / 5 + Math.sin(time + phase) * 65;
        const cy = fieldHeight * (0.5 + Math.sin(time * 0.6 + phase) * 0.25);
        const rx = fieldWidth * 0.22;
        paint.drawImage(reflectionTextures[i % 3 === 0 ? 1 : 0], cx - rx, cy - fieldHeight, rx * 2, fieldHeight * 2);
      }
    }
    paint.restore();
  }

  function randomGenerator() {
    let seed = 73491;
    return () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };
  }

  function makeSprites() {
    dark = root.getAttribute("data-theme") === "dark";
    const colors = ["233,234,238", "255,255,255", "188,191,199"];
    sprites = colors.map((color) => {
      const sprite = document.createElement("canvas");
      sprite.width = sprite.height = 32;
      const brush = sprite.getContext("2d");
      const glow = brush.createRadialGradient(16, 16, 0, 16, 16, 16);
      glow.addColorStop(0, `rgba(${color},1)`);
      glow.addColorStop(0.17, `rgba(${color},0.94)`);
      glow.addColorStop(0.32, `rgba(${color},0.65)`);
      glow.addColorStop(0.6, `rgba(${color},0.22)`);
      glow.addColorStop(1, `rgba(${color},0)`);
      brush.fillStyle = glow;
      brush.fillRect(0, 0, 32, 32);
      return sprite;
    });
  }

  function resize() {
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (navbarContext) {
      navbarWidth = navbarCanvas.clientWidth;
      navbarHeight = navbarCanvas.clientHeight;
      navbarCanvas.width = Math.round(navbarWidth * ratio);
      navbarCanvas.height = Math.round(navbarHeight * ratio);
      navbarContext.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    if (footerContext) {
      footerWidth = footerCanvas.clientWidth;
      footerHeight = footerCanvas.clientHeight;
      footerCanvas.width = Math.round(footerWidth * ratio);
      footerCanvas.height = Math.round(footerHeight * ratio);
      footerContext.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    const random = randomGenerator();
    const edges = ["left", "right", "left", "right", "top", "bottom"];
    const particleCount = dark ? Math.round((width < 768 ? 384 : 1260) * 0.7) : 0;
    particles = Array.from({ length: particleCount }, (_, index) => {
      const radius = Math.pow(random(), 0.76);
      return {
        edge: edges[index % edges.length],
        radius,
        offset: random(),
        scatter: random() - 0.5,
        size: 3 + Math.pow(random(), 3) * 7,
        opacity: 0.38 + random() * 0.6,
        color: random() > 0.91 ? 2 : index % 2,
        phase: random() * Math.PI * 2,
      };
    });
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    if (navbarContext) navbarContext.clearRect(0, 0, navbarWidth, navbarHeight);
    if (footerContext) footerContext.clearRect(0, 0, footerWidth, footerHeight);
    if (!dark) {
      drawReflections(context, width, height, "page");
      if (navbarContext) drawReflections(navbarContext, navbarWidth, navbarHeight, "navbar");
      if (footerContext && footerVisible) drawReflections(footerContext, footerWidth, footerHeight, "footer");
      return;
    }
    const sideBand = Math.min(width * 0.115, 150);
    const horizontalBand = Math.min(width < 768 ? 44 : 64, Math.max(24, height * 0.08));
    for (const star of particles) {
      if (star.edge === "bottom" && (!footerContext || !footerVisible)) continue;
      const horizontal = star.edge === "top" || star.edge === "bottom";
      const inNavbar = star.edge === "top" && navbarContext;
      const inFooter = star.edge === "bottom" && footerContext;
      const paint = inNavbar ? navbarContext : inFooter ? footerContext : context;
      const fieldWidth = inNavbar ? navbarWidth : inFooter ? footerWidth : width;
      const fieldHeight = inNavbar ? navbarHeight : inFooter ? footerHeight : height;
      const band = inNavbar ? Math.max(12, navbarHeight - 16) : horizontal ? horizontalBand : sideBand;
      const distanceFromEdge = band * (-0.12 + (star.scatter + 0.5) * 1.08 + Math.sin(star.phase) * 0.1);
      const x = horizontal
        ? star.offset * (fieldWidth + 24) - 12
        : star.edge === "left" ? distanceFromEdge : width - distanceFromEdge;
      const baseY = horizontal
        ? star.edge === "top" ? 8 + distanceFromEdge : footerHeight - distanceFromEdge
        : star.offset * (height + 24) - 12;
      // Scrolling down pulls the field upward; nearer stars move a little more.
      const depth = (0.06 + star.radius * 0.18) * (horizontal ? 0.35 : 1);
      const span = fieldHeight + 24;
      const y = ((baseY + 12 - parallaxOffset * depth) % span + span) % span - 12;
      if (x < -12 || x > fieldWidth + 12 || y < -12 || y > fieldHeight + 12) continue;
      const normalizedDistance = Math.max(0, Math.min(1, distanceFromEdge / band));
      const readingMask = 0.16 + 0.84 * Math.pow(1 - normalizedDistance, 1.1);
      // Keep header text clear and prevent dense overlaps at the lower corners.
      const cornerFade = horizontal && !inNavbar ? Math.min(1, Math.max(0, Math.min(x, width - x)) / sideBand) : 1;
      const luminance = 0.88 + 0.12 * Math.sin(star.phase);
      paint.globalAlpha = star.opacity * readingMask * luminance * (inNavbar ? 0.7 : horizontal ? 0.75 * cornerFade : 1);
      const size = star.size * 1.5;
      paint.drawImage(sprites[star.color], x - size / 2, y - size / 2, size, size);
    }
    context.globalAlpha = 1;
    if (navbarContext) navbarContext.globalAlpha = 1;
    if (footerContext) footerContext.globalAlpha = 1;
  }

  function synchronize() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    control.hidden = reducedMotion.matches;
    control.textContent = paused ? "Resume background" : "Pause background";
    control.setAttribute("aria-label", paused ? "Resume animated background" : "Pause animated background");
    control.setAttribute("aria-pressed", String(paused));
    canvas.dataset.motionState = reducedMotion.matches ? "reduced-motion" : paused ? "paused" : (document.hidden || !pageVisible) ? "hidden" : "scroll-linked";
    if (navbarCanvas) navbarCanvas.dataset.motionState = canvas.dataset.motionState;
    if (footerCanvas) footerCanvas.dataset.motionState = canvas.dataset.motionState;
    if (!paused && !reducedMotion.matches && !document.hidden && pageVisible) {
      parallaxOffset = Math.max(0, window.scrollY || 0);
    }
    draw();
  }

  control.addEventListener("click", () => {
    paused = !paused;
    try { sessionStorage.setItem(storageKey, String(paused)); } catch (_) { /* Storage is optional. */ }
    synchronize();
  });
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  }, { passive: true });
  window.addEventListener("scroll", () => {
    if (paused || reducedMotion.matches || document.hidden || !pageVisible) return;
    parallaxOffset = Math.max(0, window.scrollY || 0);
    if (!frame) {
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!paused && !reducedMotion.matches && !document.hidden && pageVisible) draw();
      });
    }
  }, { passive: true });
  document.addEventListener("visibilitychange", synchronize);
  reducedMotion.addEventListener("change", synchronize);
  window.addEventListener("pagehide", () => { pageVisible = false; synchronize(); });
  window.addEventListener("pageshow", () => { pageVisible = true; synchronize(); });
  new MutationObserver(() => { makeSprites(); resize(); synchronize(); }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  if (footerCanvas && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      draw();
    }).observe(footerCanvas);
  }

  makeSprites();
  resize();
  synchronize();
})();
