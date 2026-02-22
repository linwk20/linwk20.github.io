---
layout: page
permalink: /experience/
title: 💼 Experience
description:
nav: true
nav_order: 4
---

<style>
.exp-entry {
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.exp-entry:last-child {
  border-bottom: none;
}

html[data-theme="dark"] .exp-entry {
  border-bottom-color: rgba(255,255,255,0.08);
}

.exp-logo {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  margin-top: 0.6rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.exp-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
}

.exp-content {
  flex: 1;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.exp-company {
  font-weight: 700;
  font-size: 1.1rem;
}

.exp-date {
  font-size: 0.85rem;
  color: #888;
  white-space: nowrap;
}

.exp-role {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin-top: 0.15rem;
}

.exp-detail {
  font-size: 0.9rem;
  margin-top: 0.3rem;
  line-height: 1.7;
}
</style>

<h3 style="font-weight: normal; margin-top: 0;">🎓 Education</h3>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/rochester.png' | relative_url }}" alt="University of Rochester">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://www.rochester.edu/">University of Rochester</a></span>
      <span class="exp-date">Aug 2023 – Present</span>
    </div>
    <div class="exp-role">Ph.D. in Computer Science &middot; Rochester, NY, USA</div>
    <div class="exp-detail">
      Advisor: <a href="https://yuhaozhu.com/">Yuhao Zhu</a>, <a href="https://horizon-lab.org/">Horizon Lab</a><br>
      Research interests: AR/VR Graphics, Hardware Architecture, Imaging System, and AI (e.g. Embodied and Generative AI).
    </div>
  </div>
</div>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/pku.png' | relative_url }}" alt="Peking University">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://english.pku.edu.cn/">Peking University</a></span>
      <span class="exp-date">Sep 2020 – Jul 2023</span>
    </div>
    <div class="exp-role">M.Sc. in Intelligent Science, School of Intelligence Science and Technology &middot; Beijing, China</div>
    <div class="exp-detail">
      Advisor: Dingsheng Luo<br>
      Research interests: Robotics, Embodied Intelligence, and Autonomous Driving.
    </div>
  </div>
</div>

<div class="exp-entry" style="border-bottom: none;">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/tsinghua.png' | relative_url }}" alt="Tsinghua University">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a></span>
      <span class="exp-date">Sep 2016 – Jul 2020</span>
    </div>
    <div class="exp-role">B.E. in Electronic Engineering, Department of Electronic Engineering &middot; Beijing, China</div>
    <div class="exp-detail">
      Advisor: Li Su<br>
      Research interests: Software-Hardware Co-design and Wireless Communication Theory.
    </div>
  </div>
</div>

<h3 style="font-weight: normal; margin-top: 1rem;">💼 Work Experience</h3>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/pixocial.png' | relative_url }}" alt="Pixocial">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://pixocial.com/">Pixocial AI Lab</a></span>
      <span class="exp-date">May 2025 – Aug 2025</span>
    </div>
    <div class="exp-role">Applied Research Intern &middot; Bellevue, WA, USA</div>
    <div class="exp-detail">
      Mentor: <a href="https://haoxiangli.com/">Haoxiang Li</a><br>
      Project: Physics-informed video diffusion model. <a href="https://ctrlhair-arxiv.netlify.app/">Project Page</a>.
    </div>
  </div>
</div>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/amd.png' | relative_url }}" alt="AMD">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://www.amd.com/">Advanced Micro Devices, Inc. (AMD)</a></span>
      <span class="exp-date">Jul 2022 – Feb 2023</span>
    </div>
    <div class="exp-role">Co-op / Intern &middot; Beijing, China</div>
    <div class="exp-detail">
      Mentor: Fuwei Yang<br>
      Project: SLAMs, ML workload testing and evaluation on AMD GPU.
    </div>
  </div>
</div>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/cambricon.png' | relative_url }}" alt="Cambricon">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://www.cambricon.com/">Cambricon Technologies Co., Ltd.</a></span>
      <span class="exp-date">Jul 2019 – Aug 2019</span>
    </div>
    <div class="exp-role">Co-op / Intern &middot; Beijing, China</div>
    <div class="exp-detail">
      Mentor: Miao Li<br>
      Project: Neural networks pruning.
    </div>
  </div>
</div>
