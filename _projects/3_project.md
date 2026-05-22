---
layout: page
title: Adversarial Attacks on Large Language Models
description: Undergraduate research project studying hallucinations, adversarial perturbations, and error propagation in LLMs.
img: assets/img/llm-attacks.jpg
importance: 2
category: research
related_publications: false
giscus_comments: false
---

This undergraduate research project explores hallucinations and adversarial vulnerabilities in large language models (LLMs) through the lens of interpretability, robustness, and information theory.

Hallucinations in LLMs refer to outputs that are fabricated, factually incorrect, or unsupported by existing knowledge. While prior work has largely focused on defining metrics to detect hallucinations, this project investigates the *internal mechanisms* that lead to such behaviors by analyzing the response of white-box transformer models to adversarial perturbations applied directly in logit space.

The work studies:

- Robustness of LLMs to injected perturbations
- Mechanisms of hallucination and error propagation
- Internal correction dynamics in transformer architectures
- The relationship between greedy decoding and nucleus sampling
- Interpretability of transformer behavior under adversarial conditions

A central perspective of this project is drawing parallels between transformer-based language models and classical communication systems. The LLM is conceptualized as a *noisy communication channel*, where perturbations in internal representations can lead to corrupted output generation, analogous to errors in digital communication systems.

This framing enables the study of hallucinations through concepts inspired by:

- Information Theory
- Error Detection and Correction
- Coding Theory
- Transformer Interpretability
- Adversarial Machine Learning

### Project Report

- <a href="/assets/pdf/project_report.pdf" target="_blank">Project Report</a>

### Research Areas

- Large Language Models
- Mechanistic Interpretability
- Adversarial Machine Learning
- Information Theory
- Deep Learning Robustness
