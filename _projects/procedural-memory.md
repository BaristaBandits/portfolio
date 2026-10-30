---
layout: page
title: From Trajectories to Workflows
description: Online procedural memory abstraction for language agents.
img: assets/img/workflow.png
importance: -1
category: research
hide_description: true
---

This project was conducted during my summer internship at Fujitsu Research of India, where I worked with Ishan Jindal and Mahesh Chandran on procedural memory for language agents.

The work explores how agents can consolidate repeated experience into reusable natural-language workflows, instead of storing every interaction trajectory separately. Each workflow captures environment knowledge, high-level steps, and failure guidance for a task family.

### Abstract

We propose a workflow-centric procedural memory framework that continually merges experience into a bounded set of workflows. The workflows are updated online under outcome-conditioned policies and retrieved to guide future tasks, without fine-tuning the underlying language model. On ALFWorld and ScienceWorld, the framework uses 3.5× fewer memory tokens on average, with reductions of 1.1–9.1× across settings. Performance is competitive on ALFWorld and ScienceWorld-Easy; the most difficult ScienceWorld setting remains a limitation.

<img src="{{ '/assets/img/workflow.png' | relative_url }}" alt="Workflow-centric procedural memory framework from the paper" class="img-fluid project-paper-image" loading="lazy">

### Paper

**From Trajectories to Workflows: Online Procedural Memory Abstraction for Language Agents**

Swathi Shree Narashiman, Ishan Jindal, Mahesh Chandran. REALM 2026, pages 1144–1159.

[ACL Anthology paper](https://aclanthology.org/2026.realm-1.78/) · [PDF](https://aclanthology.org/2026.realm-1.78.pdf)

### Highlights

- Consolidated repeated trajectories into task-family workflows
- Studied outcome-conditioned memory updates
- Evaluated task performance and memory use on ALFWorld and ScienceWorld
- Reduced memory growth while keeping the language model’s weights fixed
