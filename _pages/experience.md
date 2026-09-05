---
layout: page
permalink: /experience/
title: Experience
description:
nav: true
nav_order: 4
---

<style>
.exp-entry {
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(100, 116, 139, 0.16);
}

.exp-entry:last-child {
  border-bottom: none;
}

html[data-theme="dark"] .exp-entry {
  border-bottom-color: rgba(148, 163, 184, 0.16);
}

.exp-logo {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  margin-top: 0.15rem;
  border: 1px solid rgba(100, 116, 139, 0.15);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.exp-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 7px;
}

.exp-content {
  flex: 1;
  min-width: 0;
}

.exp-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem 1.2rem;
  justify-content: space-between;
  align-items: baseline;
}

.exp-company {
  font-weight: 650;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  line-height: 1.5;
}

.exp-date {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  line-height: 1.6;
  font-variant-numeric: tabular-nums;
}

.exp-role {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin-top: 0.25rem;
  line-height: 1.6;
}

.exp-detail {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  line-height: 1.7;
}

.exp-section-title {
  margin: 2.25rem 0 0.25rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.exp-section-title:first-of-type {
  margin-top: 0;
}

@media (max-width: 575.98px) {
  .exp-entry {
    gap: 0.9rem;
    padding: 1.25rem 0;
  }

  .exp-logo {
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }

  .exp-logo img {
    padding: 5px;
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }

  .exp-company {
    font-size: 1rem;
  }

  .exp-detail {
    font-size: 0.86rem;
  }
}
</style>

<h3 class="exp-section-title">Education</h3>

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

<h3 class="exp-section-title">Work Experience</h3>

<div class="exp-entry">
  <div class="exp-logo">
    <img src="{{ '/assets/img/work_logos/meta.png' | relative_url }}" alt="Meta Platforms, Inc.">
  </div>
  <div class="exp-content">
    <div class="exp-header">
      <span class="exp-company"><a href="https://www.meta.com/">Meta Platforms, Inc.</a></span>
      <span class="exp-date">May 2026 – Oct 2026</span>
    </div>
    <div class="exp-role">Research Scientist Intern &middot; CA, USA</div>
  </div>
</div>

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
      Project: SLAMs, ML workload testing and evaluation on AMD GPUs. Participated in a ROCm release.
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
