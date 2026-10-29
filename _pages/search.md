---
title: "Search"
permalink: /search/
layout: single
description: "Search Kuldeep Prajapat's academic website for research topics, publications, presentations, and academic pages."
author_profile: false
sitemap: true
---

<div class="kp site-search">
  <header class="search-header">
    <p class="section-kicker">SITE INDEX / FIND A TOPIC</p>
    <h2>Search the research archive</h2>
    <p>Search research themes, cluster and fullerene systems, publications, presentations, and academic pages.</p>
  </header>
  <form class="search-form" id="site-search-form" role="search">
    <label class="search-label" for="site-search-query">Search terms</label>
    <div class="search-controls">
      <input id="site-search-query" name="q" type="search" placeholder="e.g. photoionization, Na20@C240, time delay" autocomplete="off" aria-describedby="site-search-status" required>
      <button class="kp-btn" type="submit">Search</button>
    </div>
  </form>
  <p id="site-search-status" class="search-status" aria-live="polite">Enter a topic to search the site.</p>
  <ol id="site-search-results" class="search-results" aria-label="Search results"></ol>
  <noscript><p class="search-empty">JavaScript is required for site search. Use the Research, Publications, and CV pages from the navigation instead.</p></noscript>
</div>
<script src="{{ '/assets/js/site-search.js' | relative_url }}" defer></script>
