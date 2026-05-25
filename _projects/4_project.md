---
layout: page
title: AlphaZip
description: Neural Network-Enhanced Lossless Text Compression
img: assets/img/4_proj.png
importance: 4
category: research
related_publications: true
---

This project was conducted at IIT Madras under the guidance of Prof. Nitin Chandrachoodan.

AlphaZip explores the use of Large Language Models (LLMs) for predictive lossless text compression. The work combines neural sequence modeling with classical information-theoretic compression algorithms to improve compression efficiency over traditional approaches.

The framework uses neural language models to predict token distributions and compresses the resulting rank information using entropy coding techniques.

The project combines ideas from:

- Information Theory
- Data Compression
- Large Language Models
- Statistical Language Modeling
- Neural Sequence Modeling

### Abstract

Traditional information-theoretic approaches have long dominated text compression systems. This work introduces a neural network-enhanced lossless compression framework that leverages transformer-based language models for predictive coding. The method first predicts token likelihood rankings using autoregressive neural architectures and subsequently compresses the predicted ranks using classical compression algorithms such as Adaptive Huffman coding, LZ77, and Gzip. Extensive benchmarking demonstrates that neural predictive compression achieves improved compression performance compared to conventional baselines.

### Pre-print

> **AlphaZip: Neural Network-Enhanced Lossless Text Compression**  
> Swathi Shree Narashiman, N. Chandrachoodan (2024)

- <a href="https://arxiv.org/abs/2409.15046" target="_blank">arXiv Paper</a>

### Highlights

- Developed an LLM-based predictive compression framework
- Combined transformer predictions with entropy coding methods
- Benchmarked against classical compression baselines
- Achieved strong compression performance on text corpora
- Explored neural rank prediction for lossless coding
