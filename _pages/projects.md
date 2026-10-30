---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
---

<div class="projects portfolio-projects">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% assign research_projects = site.projects | where: 'category', 'research' | sort: 'importance' %}
    {% for project in research_projects %}
      <div class="col mb-4">
        <a class="card h-100 hoverable portfolio-project-card" href="{{ project.url | relative_url }}">
          {% if project.img %}<img class="card-img-top" src="{{ project.img | relative_url }}" alt="{{ project.title | escape }}" loading="lazy">{% endif %}
          <div class="card-body"><h2 class="card-title">{{ project.title | escape }}</h2><p class="card-text">{{ project.description | escape }}</p></div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
