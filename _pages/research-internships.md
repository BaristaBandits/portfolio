---
layout: page
title: research internships
permalink: /resources/research-internships/
nav: false
sitemap: false
---

These are programs I collected during my internship search. The original sheet was for 2025, so check the official websites for current dates, requirements, and eligibility.

<div class="table-responsive">
<table class="table table-sm">
  <thead><tr><th>Program</th><th>Institution</th><th>Location</th></tr></thead>
  <tbody>
    {% for program in site.data.resources.programs %}
      <tr><td><a href="{{ program.url | escape }}">{{ program.title | escape }}</a></td><td>{{ program.institution | escape }}</td><td>{{ program.region | escape }}</td></tr>
    {% endfor %}
  </tbody>
</table>
</div>

My sheet tracked the deadline, required documents, official link, and application status for each program. I kept my CV, transcripts, SoP, and recommendation requests ready, then checked the specific requirements for each application.

[Original sheet](https://docs.google.com/spreadsheets/d/1mdDkLId4V1MKuwTIJ1etFEa6kuGisZU5pJ-6FwiMcyw/edit) · [Back to resources]({{ '/resources/' | relative_url }})
