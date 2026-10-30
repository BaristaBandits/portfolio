---
layout: folio
permalink: /publications/
title: publications
eyebrow: 01 / Research & writing
headline: Ideas, put to paper.
description: Exploring how language models learn, remember, and represent the world — with a few detours into music, compression, and sensing.
nav: true
nav_order: 2
scholar_link: true
endnote: Every paper starts with a question.
---

<div data-folio-filter>
  <div class="folio-toolbar" hidden data-filter-controls>
    <label class="folio-search">Find a paper
      <input type="search" data-filter-search placeholder="Search titles, authors, or topics…" autocomplete="off">
    </label>
    <div class="folio-filters" role="group" aria-label="Filter publications by topic">
      <button type="button" data-filter="all" aria-pressed="true">All work</button>
      <button type="button" data-filter="Language Models" aria-pressed="false">Language models</button>
      <button type="button" data-filter="LLM Agents" aria-pressed="false">Agents & memory</button>
      <button type="button" data-filter="Music AI" aria-pressed="false">Music</button>
      <button type="button" data-filter="Compression" aria-pressed="false">Compression</button>
      <button type="button" data-filter="RadarML" aria-pressed="false">Sensing</button>
      <button type="button" data-filter="Autonomous Systems" aria-pressed="false">Systems</button>
    </div>
  </div>
  <p class="folio-result" data-filter-count role="status" aria-live="polite"></p>
  <div class="folio-papers">
    {% bibliography --template folio-publication --sort_by year,month --order descending,descending %}
  </div>
  <p class="folio-empty" data-filter-empty hidden>No papers match that search. Try another topic or clear the search.</p>
</div>
