---
layout: post
title: "Re-reading The Bitter Lesson"
date: 2026-03-02
description: >
  Sutton's Bitter Lesson has already been proved by the LLM moment. Now the same wave is reaching CV and CG. We should design for scalability, not for clever human priors.
tags: ai research reflection
categories: thoughts
icon: fa-solid fa-bolt
---

> The biggest lesson that can be read from 70 years of AI research is that general methods that leverage computation are ultimately the most effective, and by a large margin.
>
> — Rich Sutton, [*The Bitter Lesson*](https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf)

I first read Sutton's essay a few years ago, found it provocative, and then mostly forgot about it. Recently I picked it up again, and this time it hit differently — not because the argument changed, but because the evidence around it has become **overwhelming**.

Sutton's core argument is deceptively simple: throughout the history of AI, researchers have repeatedly poured effort into encoding human knowledge — hand-crafted features, domain-specific priors, expert-designed architectures — only to watch general methods that scale with computation blow past them. The bitter part is that we keep making the same mistake, because leveraging what we *know* feels like the right thing to do.

---

## 🗣️ The LLM Moment

We have already seen this play out in NLP, decisively. Today's LLMs, by scaling up both data and compute, have achieved capabilities that no amount of linguistic engineering could have produced. They write, reason, and code. AI agents built on top of them are increasingly showing signs of general intelligence. The hand-crafted NLP pipelines of a decade ago — tokenizers tuned to specific grammars, parse trees, carefully designed feature extractors — have been swept away almost entirely.

The lesson, at least for language, has been learned. Or rather, ***proven***.

---

## 🌊 The Wave Reaches Vision and Graphics

So the natural question becomes: **does The Bitter Lesson apply to Computer Vision and Computer Graphics as well?**

Researchers are starting to think so. Vincent Sitzmann recently wrote about [The Bitter Lesson for Computer Vision](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/), arguing that even priors we consider "golden" — fundamental, unquestionable — will eventually be swept away. His most striking claim:

> SE(3) Camera Poses Will Go, Too.

If even the camera model, one of the most principled and well-established priors in all of vision, is destined to be replaced by learned representations, then **nothing is sacred**.

We are already seeing early signs. World models are learning to simulate 3D environments end-to-end, without explicit scene graphs or physics engines. Generative models are producing photorealistic images and videos with little to no geometric reasoning baked in. The trend is clear: *learn it, don't engineer it.*

---

## 🔍 A Nuance Worth Noticing

That said, there is a nuance worth noticing.

The Bitter Lesson works *because* computation scales. But computation alone is not enough — **it needs data**. The reason scaling works so well in NLP is that the internet provides virtually unlimited text. The reason it is starting to work in vision is the abundance of images and videos online. When both data and compute scale together, general methods win decisively.

But not every domain has that luxury. In fields like:

- 🏥 **Medical imaging** — high-quality MRI scans and clinical annotations are scarce and expensive
- 🔭 **Astronomical observation** — stellar spectra and deep-sky surveys are fundamentally limited by telescope time
- 🧠 **Human perception** — mocap, gaze tracking, and biomechanics data requires real people, real equipment, and real time

...data is inherently scarce and expensive to collect. You cannot simply scrape the internet for these.

In these data-sparse settings, human knowledge still matters. Carefully designed priors and domain expertise can help models perform well when there is simply not enough data for a purely general method to learn from scratch. At least in the short term — before data accumulates to the critical mass where scaling takes over — **human knowledge remains a practical and valuable tool.**

---

## 🧭 What Should We Do?

The power of scaling and learning has been proven. The eventual obsolescence of hand-crafted human knowledge has been proven too. This is not speculation — it is the pattern of the last decade.

So if we still choose to incorporate human knowledge — especially in data-scarce domains where it remains useful — we should hold it to a **strict standard**:

> {: .block-tip }
> **1. 🚀 It must not block scaling.**
> Human knowledge should never limit a model's capacity to grow. If your prior constrains the architecture in a way that prevents it from absorbing more data or compute, it will become a bottleneck — and eventually a liability.
>
> **2. 🔄 It must be flexible.**
> As data accumulates, the model should be able to override, refine, or discard the prior entirely. Human knowledge should be a *soft initialization*, not a hard constraint. If the data says otherwise, the data wins.
>
> **3. 🌐 It must connect to scalable sources.**
> Rather than encoding narrow, domain-specific intuition, our priors should be designed to transfer knowledge from data-rich domains — fields where scaling laws have already delivered transformative results. Cross-domain information extraction is where human insight can still add real value.

In short, I hope the work we do going forward is the kind that **endures** — work that can be inherited, built upon, and scaled — rather than the kind that makes a constrained problem feel solved while contributing little to the bigger picture. ✨
