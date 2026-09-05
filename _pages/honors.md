---
layout: page
permalink: /honors/
title: Honors
description:
nav: true
nav_order: 2
---

<div class="honor-list">
  <article class="honor-card">
    <div class="honor-certificate-wrap">
      {% assign asplos_certificate_path = 'assets/img/award/asplos_best_paper.png' %}
      {%
        include figure.liquid
        loading="eager"
        path=asplos_certificate_path
        zoom_src=asplos_certificate_path
        sizes="(min-width: 576px) 400px, 90vw"
        class="honor-certificate rounded"
        zoomable=true
        alt="ASPLOS 2025 Best Paper Award certificate for MetaSapiens"
      %}
      <p class="honor-zoom-hint">Click the certificate to enlarge</p>
    </div>
    <div class="honor-copy">
      <p class="honor-date">March 30–April 3, 2025</p>
      <h3>ASPLOS 2025 Best Paper Award</h3>
      <p class="honor-organization">30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems</p>
      <p class="honor-paper"><em>MetaSapiens: Real-Time Neural Rendering with Efficiency-Aware Pruning and Accelerated Foveated Rendering</em></p>
      <p class="honor-location">Rotterdam, The Netherlands</p>
    </div>
  </article>

  <article class="honor-card">
    <div class="honor-certificate-wrap">
      {% assign certificate_path = 'assets/img/award/dac_young_fellow_2026.png' %}
      {%
        include figure.liquid
        loading="eager"
        path=certificate_path
        zoom_src=certificate_path
        sizes="(min-width: 576px) 400px, 90vw"
        class="honor-certificate rounded"
        zoomable=true
        alt="Certificate recognizing Weikai Lin as a DAC Young Fellow 2026"
      %}
      <p class="honor-zoom-hint">Click the certificate to enlarge</p>
    </div>
    <div class="honor-copy">
      <p class="honor-date">July 26–29, 2026</p>
      <h3>DAC Young Fellow 2026</h3>
      <p class="honor-organization">63rd ACM/IEEE Design Automation Conference</p>
      <p class="honor-location">Long Beach, California</p>
    </div>
  </article>
</div>
