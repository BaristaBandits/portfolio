---
layout: page
title: Genre Steering for Music Generation
description: Fine-grained Control over Music Generation with Activation Steering
img: assets/img/5_proj.png
importance: 5
category: research
related_publications: true
---

This project was developed as part of research at the AI Club, IIT Madras.

The work introduces inference-time activation steering methods for controllable music generation using MusicGen, an autoregressive generative music transformer. The approach enables fine-grained control over generated audio through interventions in the residual stream and attention activations.

The project focuses on controllable generation tasks such as timbre transfer, style transfer, and genre fusion while preserving coherence with text-conditioned prompts.

The project combines ideas from:

- Generative AI
- Music Generation
- Mechanistic Interpretability
- Representation Learning
- Transformer Models

### Abstract

We present a method for fine-grained control over music generation through inference-time interventions on MusicGen. Our approach enables timbre transfer, style transfer, and genre fusion by steering the residual stream using linear probes trained on internal activations, or by steering attention layer activations similarly. We observe that modeling steering as a regression task improves performance, suggesting that mean-squared-error objectives better preserve meaningful directional information in activation space. Combined with MusicGen’s text conditioning, the method provides both global and local control over generated music.

### Paper

> **Fine-grained Control over Music Generation with Activation Steering**  
> D. Panda, Swathi Shree Narashiman, J. K. Joe, et al. (2025)

- <a href="https://arxiv.org/abs/2506.10225" target="_blank">arXiv Paper</a>
- <a href="https://controllable-genre-fusion.github.io/" target="_blank">Demo Page</a>

### Highlights

- Developed activation steering methods for controllable music generation
- Enabled genre fusion, timbre transfer, and style transfer
- Performed inference-time interventions on MusicGen activations
- Explored residual stream and attention-layer steering
- Achieved fine-grained local and global control in generated music
