---
layout: page
permalink: /research/
title: 🔬 Research
description:
nav: true
nav_order: 1
---

<style>
/* --- Per-category colors --- */
/* --- AI systems: red --- */
.research-area.ai-systems {
  border-left: 4px solid #b23a48;
  background: #fbeff1;
}
.research-area.ai-systems .research-tags span { background: #b23a48; }

/* --- AR/VR systems: warm orange --- */
.research-area.arvr {
  border-left: 4px solid #e67e22;
  background: #fdf2e9;
}
.research-area.arvr .research-tags span { background: #e67e22; }

/* --- Imaging: green --- */
.research-area.imaging {
  border-left: 4px solid #10ac84;
  background: #eafaf4;
}
.research-area.imaging .research-tags span { background: #10ac84; }

/* --- Dark mode --- */
html[data-theme="dark"] .research-area.ai-systems { background: #321d22; }
html[data-theme="dark"] .research-area.arvr { background: #2d2114; }
html[data-theme="dark"] .research-area.imaging { background: #1a2f2a; }

/* --- Base styles --- */
.research-area {
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0 8px 8px 0;
}

.research-area h3 {
  margin: 0;
  line-height: 1;
}

.research-area p {
  margin-bottom: 0.6rem;
  line-height: 1.7;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
}

.research-tags span {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  opacity: 0.85;
}

details.area-details {
  margin: 0;
}

details.pub-details {
  margin-top: 1rem;
}

details.area-details summary,
details.pub-details summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.3rem 0;
  user-select: none;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

details.area-details summary::-webkit-details-marker,
details.pub-details summary::-webkit-details-marker {
  display: none;
}

details.area-details summary::before {
  content: '▶';
  display: inline-block;
  font-size: 1.1rem;
  transition: transform 0.2s;
}

details.pub-details summary::before {
  content: '▶';
  display: inline-block;
  font-size: 0.75rem;
  transition: transform 0.2s;
}

details[open].area-details > summary::before,
details[open].pub-details > summary::before {
  transform: rotate(90deg);
}

details.area-details summary:hover,
details.pub-details summary:hover {
  opacity: 0.8;
}

.ai-systems details.area-details summary,
.ai-systems details.area-details summary::before,
.ai-systems details.pub-details summary,
.ai-systems details.pub-details summary::before { color: #b23a48; }

.arvr details.area-details summary,
.arvr details.area-details summary::before,
.arvr details.pub-details summary,
.arvr details.pub-details summary::before { color: #e67e22; }

.imaging details.area-details summary,
.imaging details.area-details summary::before,
.imaging details.pub-details summary,
.imaging details.pub-details summary::before { color: #10ac84; }

.pub-list {
  margin-top: 0.5rem;
}

.pub-entry {
  display: block;
  padding: 0.4rem 0;
  line-height: 1.6;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.pub-entry:last-child {
  border-bottom: none;
}

.pub-entry strong {
  color: #555;
}

html[data-theme="dark"] .pub-entry strong {
  color: #aaa;
}

html[data-theme="dark"] .pub-entry {
  border-bottom-color: rgba(255,255,255,0.08);
}

.pub-entry .award {
  color: #e74c3c;
  font-weight: 700;
}

.research-intro {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}
</style>

<p class="research-intro">
I am interested in end-to-end hardware-software co-design. My publications span AR/VR, AI, and imaging systems.
<br>
I am also an AI Maximalist interested in Autoresearch/AI4S, aiming to accelerate scientific discovery by orders of magnitude and unlock research that was previously impossible.
</p>

<div class="research-area arvr">
<details class="area-details">
<summary><h3 style="display:inline; cursor:pointer;">AR/VR Systems</h3></summary>

<p>
Building efficient AR/VR systems through joint optimization across rendering algorithms, displays, hardware, and perception. This includes power-aware tone mapping, real-time Gaussian splatting, foveated rendering, and streaming architectures for immersive content.
</p>

<div class="research-tags">
  <span>3D Gaussian Splatting</span>
  <span>Foveated Rendering</span>
  <span>XR Systems</span>
  <span>Hardware Accelerator</span>
  <span>Neural Rendering</span>
  <span>Power-Aware Computing</span>
</div>

<details class="pub-details">
<summary>Related Publications</summary>
<div class="pub-list">
  <span class="pub-entry"><strong>[TVCG 2026]</strong> LowPowAR: Power-Constrained Tone Mapping for Augmented Reality</span>
  <span class="pub-entry"><strong>[CVPR 2026]</strong> <span class="award">(Highlight)</span> <a href="https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_Seele_A_Unified_Acceleration_Framework_for_Real-Time_Gaussian_Splatting_on_CVPR_2026_paper.pdf">SeeLe: A Unified Acceleration Framework for Real-Time Gaussian Splatting on Mobile Devices</a></span>
  <span class="pub-entry"><strong>[SIGGRAPH Asia 2025]</strong> <a href="https://powergs.netlify.app/">PowerGS: Display-Rendering Power Co-Optimization for Neural Rendering in Power-Constrained XR Systems</a></span>
  <span class="pub-entry"><strong>[ASPLOS 2025]</strong> <span class="award">(Best Paper Award)</span> <a href="https://horizon-lab.org/metasapiens/">MetaSapiens: Real-Time Neural Rendering with Efficiency-Aware Pruning and Accelerated Foveated Rendering</a></span>
  <span class="pub-entry"><strong>[ASPLOS 2025]</strong> <a href="https://dl.acm.org/doi/abs/10.1145/3676641.3716021">StreamGrid: Streaming Point Cloud Analytics via Compulsory Splitting and Deterministic Termination</a></span>
  <span class="pub-entry"><strong>[ISCA 2025]</strong> <a href="https://dl.acm.org/doi/10.1145/3695053.3731003">Lumina: Real-Time Mobile Neural Rendering by Exploiting Computational Redundancy</a></span>
  <span class="pub-entry"><strong>[HotMobile 2025]</strong> <a href="https://dl.acm.org/doi/abs/10.1145/3708468.3711886">Advancing Immersive Content Delivery with Dynamic 3D Gaussian Splatting</a></span>
  <span class="pub-entry"><strong>[ACM TACO 2024]</strong> <a href="/assets/pdf/taco24.pdf">Potamoi: Accelerating Neural Rendering via a Unified Streaming Architecture</a></span>
  <span class="pub-entry"><strong>[Project 2024]</strong> <a href="https://github.com/horizon-research/hvs_vr_encoding">Exploiting Human Color Discrimination for Memory and Energy-Efficient Image Encoding in Virtual Reality: An FPGA Demo</a></span>
</div>
</details>
</details>
</div>

<div class="research-area ai-systems">
<details class="area-details">
<summary><h3 style="display:inline; cursor:pointer;">AI Systems</h3></summary>

<p>
Developing artificial intelligence across generative and multimodal learning, embodied perception, and robot learning. This work spans controllable visual generation, cross-modal alignment, open-world perception, and autonomous systems.
</p>

<div class="research-tags">
  <span>Generative Models</span>
  <span>Video Diffusion</span>
  <span>Multimodal Learning</span>
  <span>Cross-Modal Alignment</span>
  <span>Embodied AI</span>
  <span>3D Object Detection</span>
  <span>Robot Learning</span>
  <span>Autonomous Driving</span>
</div>

<details class="pub-details">
<summary>Related Publications</summary>
<div class="pub-list">
  <span class="pub-entry"><strong>[ECCV 2026]</strong> <a href="https://arxiv.org/abs/2509.21541">ControlHair: Synergizing Physics Simulator and Video Diffusion for Controllable Dynamic Hair Rendering</a></span>
  <span class="pub-entry"><strong>[ACM MM 2026]</strong> UniMod: Enhancing Multi-Modal Medical Diagnosis through Cross-Modality and Within-Modality Alignment</span>
  <span class="pub-entry"><strong>[IROS 2024]</strong> <a href="/assets/pdf/iros24.pdf">OW3Det: Toward Open-World 3D Object Detection for Autonomous Driving</a></span>
  <span class="pub-entry"><strong>[ROMAN 2023]</strong> Learning Clear Class Separation for Open-set 3D Detector in Autonomous Vehicle via Selective Forgetting</span>
  <span class="pub-entry"><strong>[PKU ASN 2023]</strong> A Review of Robot Learning</span>
  <span class="pub-entry"><strong>[ICDL 2021]</strong> Approaching Sound Object with Sensorimotor Coordination when Sensors Partially Damaged</span>
  <span class="pub-entry"><strong>[ICDL 2021]</strong> Acquiring Robot Navigation Skill with Knowledge Learned from Demonstration</span>
</div>
</details>
</details>
</div>

<div class="research-area imaging">
<details class="area-details">
<summary><h3 style="display:inline; cursor:pointer;">Imaging Systems</h3></summary>

<p>
Designing sensors and optics for imaging systems, along with co-optimized downstream vision models. This involves in-sensor compression inspired by efficient coding theory and privacy-preserving optical feature separation.
</p>

<div class="research-tags">
  <span>In-Sensor Computing</span>
  <span>Computational Imaging</span>
  <span>Privacy-Preserving</span>
  <span>Edge Vision</span>
</div>

<details class="pub-details">
<summary>Related Publications</summary>
<div class="pub-list">
  <span class="pub-entry"><strong>[DAC 2026]</strong> <a href="https://63dac.conference-program.com/presentation/?id=RESEARCH2996&sess=sess150">HoloCode: Hybrid Optical-Electronic Edge Encoding for Privacy-Preserving Cloud Training</a></span>
  <span class="pub-entry"><strong>[DAC 2026]</strong> <a href="https://63dac.conference-program.com/presentation/?id=SSSN118&sess=sess254">Invited Paper: A Quantitative Approach to Exploring Novel Image Sensor Architecture Towards Autonomous Edge Machine Vision</a></span>
  <span class="pub-entry"><strong>[DAC 2025]</strong> <a href="https://arxiv.org/abs/2504.04535">SnapPix: Efficient-Coding-Inspired In-Sensor Compression for Edge Vision</a></span>
  <span class="pub-entry"><strong>[WACV 2025]</strong> <a href="https://openaccess.thecvf.com/content/WACV2025/papers/Boloor_PrivateEye_In-Sensor_Privacy_Preservation_Through_Optical_Feature_Separation_WACV_2025_paper.pdf">PrivateEye: In-Sensor Privacy Preservation Through Optical Feature Separation</a></span>
</div>
</details>
</details>
</div>
