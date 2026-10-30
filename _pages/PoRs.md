---
layout: folio
title: leadership
permalink: /pors/
eyebrow: 03 / Positions of responsibility
headline: Good work takes people.
description: Building teams, sharing what I know, and learning from the communities around me.
nav: true
nav_order: 4
endnote: A little of what happens beyond the papers.
---

<div class="folio-role-list">
  {% for role in site.data.leadership %}
    <article class="folio-role">
      <div class="folio-role-visual{% unless role.image %} folio-role-type{% endunless %}">
        {% if role.image %}<img src="{{ role.image | relative_url }}" alt="{{ role.title | escape }}" loading="lazy">{% else %}<span>{{ role.symbol }}</span>{% endif %}
      </div>
      <div class="folio-role-body">
        <p class="folio-eyebrow">0{{ forloop.index }} / {{ role.role }}</p>
        <h2><a href="{{ role.url | relative_url }}">{{ role.title }}</a></h2>
        <p class="folio-role-theme">{{ role.theme }}</p>
        <p>{{ role.description }}</p>
        <p class="folio-highlight">{{ role.highlight }}</p>
        <a class="folio-link" href="{{ role.url | relative_url }}">The story & contributions <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  {% endfor %}
</div>
