---
layout: folio
title: resources
permalink: /resources/
eyebrow: 04 / The shared shelf
headline: Knowledge is better shared.
description: Notes, application experiences, and research materials — a growing collection for anyone finding their own path.
nav: true
nav_order: 5
endnote: Collected along the way. Shared for the next person.
---

<div class="folio-shelf">
  {% for collection in site.data.resources %}
    <section class="folio-resource-section" aria-labelledby="resource-{{ forloop.index }}">
      <div>
        <p class="folio-eyebrow">{{ collection.label }}</p>
        <h2 id="resource-{{ forloop.index }}">{{ collection.title }}</h2>
        <p>{{ collection.description }}</p>
      </div>
      <div class="folio-resource-items">
        {% if collection.items.size > 0 %}
          {% for item in collection.items %}
            <a class="folio-resource" href="{% if item.url contains '://' %}{{ item.url | escape }}{% else %}{{ item.url | relative_url }}{% endif %}">
              <span><strong>{{ item.title | escape }}</strong><span>{{ item.description | escape }}</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          {% endfor %}
        {% else %}
          <div class="folio-resource-pending"><span class="folio-tag">On the way</span><p>Materials will appear here once they’re ready to share.</p></div>
        {% endif %}
      </div>
    </section>
  {% endfor %}
</div>
