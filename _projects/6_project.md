---
layout: page
title: RFconstruct
description: 3D Shape Reconstruction using Commercial mmWave Radars
img: assets/img/6_proj.png
importance: 6
category: research
related_publications: true
---

This project was conducted during my Summer@EPFL research internship at the SENS Lab, EPFL under the guidance of Prof. Haitham Al Hassanieh.

RFconstruct is a framework for 3D shape reconstruction in autonomous driving scenarios using commercial off-the-shelf (COTS) mmWave radars. The work addresses the fundamental limitations of radar sensing — including low angular resolution, sparsity, and specularity — through a combination of hardware-aware sensing, temporal fusion, and machine learning.

The framework reconstructs dense 3D object shapes of cars, bikes, and pedestrians using radar-only sensing without requiring object bounding boxes.

The project combines ideas from:

- Autonomous Driving
- Radar Signal Processing
- 3D Computer Vision
- Deep Learning
- Sensor Fusion

### Abstract

This work presents RFconstruct, a framework for 3D shape reconstruction using commercial off-the-shelf mmWave radars in self-driving scenarios. RFconstruct overcomes radar limitations such as low angular resolution, specularity, and sparse point clouds through a holistic system design spanning hardware, data processing, and machine learning. The system first fuses radar data captured from orthogonal sensing planes and performs odometry-aware temporal fusion to generate denser 3D point clouds. A customized encoder-decoder architecture is then used for object shape reconstruction without requiring prior knowledge of object bounding boxes. Experimental results demonstrate accurate reconstruction of cars, bikes, and pedestrians when compared against LiDAR-assisted depth camera ground truth.

### Paper

> **RFconstruct: 3D Shape Reconstruction using Commercial mmWave Radars**  
> S. Hussein, J. Guan, Swathi Shree Narashiman, et al. (2025)

Accepted at the **British Machine Vision Conference (BMVC 2025), Sheffield, United Kingdom**.

- <a href="https://bmva-archive.org.uk/bmvc/2025/assets/papers/Paper_399/paper.pdf" target="_blank">BMVC 2025 Paper</a>

### Highlights

- Developed a radar-only 3D reconstruction framework for autonomous driving
- Performed orthogonal radar fusion for improved spatial coverage
- Introduced odometry-aware temporal fusion for dense point cloud generation
- Designed a customized encoder-decoder reconstruction architecture
- Achieved accurate reconstruction of cars, bikes, and pedestrians
- Evaluated against LiDAR-assisted depth camera ground truth
