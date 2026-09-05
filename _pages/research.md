---
layout: page
permalink: /research/
title: Research
description:
nav: true
nav_order: 1
---

<style>
.research-area.ai-systems {
  --area-accent: #a34d61;
  --area-background: #fdf8f9;
  --area-tag-background: #f4e8ec;
}

.research-area.arvr {
  --area-accent: #a76c30;
  --area-background: #fffbf5;
  --area-tag-background: #f6ecdb;
}

.research-area.imaging {
  --area-accent: #397e6d;
  --area-background: #f6fbf9;
  --area-tag-background: #e4f1ec;
}

html[data-theme="dark"] .research-area.ai-systems {
  --area-accent: #d99bab;
  --area-background: #261f24;
  --area-tag-background: #382a32;
}
html[data-theme="dark"] .research-area.arvr {
  --area-accent: #dfb57e;
  --area-background: #27231e;
  --area-tag-background: #393025;
}
html[data-theme="dark"] .research-area.imaging {
  --area-accent: #8dc9b7;
  --area-background: #1e2725;
  --area-tag-background: #293b35;
}

.research-area {
  margin-bottom: 1.25rem;
  padding: 1.5rem 1.65rem;
  border: 1px solid rgba(100, 116, 139, 0.13);
  border-left: 3px solid var(--area-accent);
  border-radius: 10px;
  background: var(--area-background);
}

.research-area h3 {
  margin: 0 0 0.65rem;
  color: var(--area-accent);
  font-size: 1.25rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.research-area p {
  margin-bottom: 0.9rem;
  font-size: 0.98rem;
  line-height: 1.7;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.8rem 0 0;
}

.research-tags span {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 5px;
  background: var(--area-tag-background);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--area-accent);
  line-height: 1.5;
}

.research-area details.pub-details {
  margin-top: 1.1rem;
  border-top: 1px solid rgba(100, 116, 139, 0.14);
  padding-top: 0.6rem;
}

.research-area details.pub-details summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.3rem 0;
  user-select: none;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--area-accent);
}

.research-area details.pub-details summary::-webkit-details-marker {
  display: none;
}

.research-area details.pub-details summary::before {
  content: '';
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  transition: transform 0.2s;
}

.research-area details[open].pub-details > summary::before {
  transform: rotate(45deg);
}

.research-area details.pub-details summary:hover {
  opacity: 0.8;
}

.research-area details.pub-details summary:focus-visible {
  outline: 2px solid var(--area-accent);
  outline-offset: 4px;
  border-radius: 2px;
}

.research-area .pub-list {
  margin-top: 0.5rem;
}

.research-area .pub-entry {
  display: block;
  padding: 0.65rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(100, 116, 139, 0.13);
}

.research-area .pub-entry:last-child {
  border-bottom: none;
}

.research-area .pub-entry strong {
  color: var(--global-text-color-light);
  font-size: 0.8rem;
  font-weight: 600;
}

.research-area .pub-entry .award {
  color: #ab683b;
  font-weight: 600;
}

.research-intro {
  max-width: 70ch;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.1rem;
}

@media (max-width: 575.98px) {
  .research-area {
    padding: 1.2rem 1.1rem;
  }

  .research-area h3 {
    font-size: 1.15rem;
  }

  .research-area p {
    font-size: 0.94rem;
  }
}
</style>

<p class="research-intro">
I am interested in end-to-end hardware-software co-design. My publications span AR/VR, AI, and imaging systems.
<br>
I am also an AI maximalist interested in Autoresearch/AI4S, aiming to accelerate scientific discovery by orders of magnitude and unlock research that was previously impossible.
</p>

<section class="research-area arvr" aria-labelledby="research-arvr">
<h3 id="research-arvr">AR/VR Systems</h3>

<p>
Building efficient AR/VR systems through joint optimization across rendering algorithms, displays, hardware, and perception. This includes power-aware tone mapping, real-time Gaussian splatting, foveated rendering, and streaming architectures for immersive content.
</p>

<div class="research-tags">
  <span>3D Gaussian Splatting</span>
  <span>Foveated Rendering</span>
  <span>AR/VR Systems</span>
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
</section>

<section class="research-area ai-systems" aria-labelledby="research-ai">
<h3 id="research-ai">AI Systems</h3>

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
</section>

<section class="research-area imaging" aria-labelledby="research-imaging">
<h3 id="research-imaging">Imaging Systems</h3>

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
</section>
