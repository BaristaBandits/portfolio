---
layout: page
title: PoRs
permalink: /pors/
nav: true
nav_order: 4
---

<div class="row row-cols-1 row-cols-md-2 portfolio-roles">
  {% for role in site.data.leadership %}
    <div class="col mb-4"><article class="card h-100">
      {% include optional-image.liquid path=role.image alt=role.title class="card-img-top" cover=true %}
      <div class="card-body"><h2 class="card-title">{{ role.title | escape }}</h2><p><strong>{{ role.role | escape }}</strong></p><p>{{ role.description | escape }}</p><a href="{{ role.url | relative_url }}">Read more</a></div>
    </article></div>
  {% endfor %}
</div>
