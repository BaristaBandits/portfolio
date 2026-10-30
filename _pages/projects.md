---
layout: folio
title: projects
permalink: /projects/
eyebrow: 02 / The workbench
headline: From questions to experiments.
description: A closer look at the systems, experiments, and collaborations behind my research.
nav: true
nav_order: 3
endnote: Theory meets the workbench.
---

<div data-folio-filter>
  <div class="folio-toolbar" hidden data-filter-controls>
    <label class="folio-search">Explore the workbench
      <input type="search" data-filter-search placeholder="Search projects and research areas…" autocomplete="off">
    </label>
  </div>
  <p class="folio-result" data-filter-count role="status" aria-live="polite"></p>
  <div class="folio-project-grid">
    {% assign research_projects = site.projects | where: 'category', 'research' | sort: 'importance' %}
    {% for project in research_projects %}
      <article class="folio-project" data-filter-item>
        <a class="folio-project-image{% unless project.img %} folio-project-typographic{% endunless %}" href="{{ project.url | relative_url }}" tabindex="-1" aria-hidden="true">
          {% if project.img %}
            <img src="{{ project.img | relative_url }}" alt="" loading="lazy">
          {% else %}
            <span>{{ project.visual | escape }}</span>
          {% endif %}
        </a>
        <div class="folio-project-body">
          <p class="folio-eyebrow">{{ project.research_area | default: 'Research' | escape }}{% if project.research_year %} / {{ project.research_year }}{% endif %}</p>
          <h2><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h2>
          <p>{{ project.description | escape }}</p>
          <div class="project-card-links">
            <a class="folio-link" href="{{ project.url | relative_url }}">Explore project <span aria-hidden="true">↗</span></a>
            {% if project.paper_url %}<a class="folio-link" href="{{ project.paper_url | escape }}">Read paper <span aria-hidden="true">↗</span></a>{% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
  <p class="folio-empty" data-filter-empty hidden>No projects match that search. Try a different research area.</p>
</div>
