---
layout: page
title: The Geometry of Language Model Logits
description: Generic structure and learned departures in language model logits.
img: assets/img/geometry.png
importance: -2
category: research
hide_description: true
---

This project was carried out with Aravind Ramana Venkatramanan and Prof. Nambi Seshadri.

The work studies the structure of the vocabulary-wide scores produced by autoregressive language models before the next token is sampled. We examine these logits in rank order to understand which patterns arise from sorting and which reflect learning.

### Abstract

Ordered vocabulary-head logits follow an approximately log-linear relation across prediction contexts, model architectures, and scales. Controlled order-statistic baselines can explain much of this shape, but not the shift in slope after training. Trained language models exhibit slopes around 1.4–1.7, compared with an initialization baseline around 0.2. The slope also correlates with predictive performance.

<img src="{{ '/assets/img/geometry.png' | relative_url }}" alt="Ordered logit spectrum and fitted log-linear relation from the paper" class="img-fluid project-paper-image" loading="lazy">

### Paper

**The Geometry of Language Model Logits: Generic Structure and Learned Departures**

Swathi Shree Narashiman, Aravind Ramana Venkatramanan, Nambi Seshadri (2026).

[arXiv paper](https://arxiv.org/abs/2610.18520)

### Highlights

- Studied ordered logit spectra across contexts, model families, and scales
- Compared trained models with controlled random baselines
- Analyzed the relationship between spectral slope and prediction quality
- Explored reconstruction of next-token distributions from the vocabulary head
