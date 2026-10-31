---
permalink: /vlog/
layout: splash
title: "Vlog"
description: "Research-life videos and science communication by Kuldeep Prajapat."
redirect_from:
  - /posts/2012/08/blog-post-1/
  - /posts/2013/08/blog-post-2/
  - /posts/2014/08/blog-post-3/
  - /posts/2015/08/blog-post-4/
  - /videos/
last_modified_at: 2026-11-01
---

<div class="kp" markdown="1">

<p class="eyebrow page-eyebrow">FIELD NOTES / SCIENCE AND RESEARCH LIFE</p>

# Vlog

A space for research-life videos, scientific explanations, conference experiences, and educational content.

{% assign vlog_posts = site.categories.vlog | sort: "date" | reverse %}
{% if vlog_posts and vlog_posts.size > 0 %}
<section class="vlog-articles" aria-labelledby="vlog-articles-title">
  <h2 id="vlog-articles-title">Articles</h2>
  <p>Short, accessible explanations of cluster physics and related research topics.</p>
  <div class="vgrid">
  {% for post in vlog_posts %}
    <article class="vcard vlog-article-card">
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }} · Article</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>{% endif %}
      <p><a href="{{ post.url | relative_url }}">Read full article <span aria-hidden="true">↗</span></a></p>
    </article>
  {% endfor %}
  </div>
</section>
{% endif %}

{% assign vids = site.data.videos %}
{% if vids and vids.size > 0 %}
<h2>Videos</h2>
<div class="vgrid">
{% for v in vids %}
<article class="vcard">
{% if v.id %}<a href="https://www.youtube.com/watch?v={{ v.id | escape }}" aria-label="Watch {{ v.title | escape }} on YouTube"><img src="https://img.youtube.com/vi/{{ v.id | escape }}/hqdefault.jpg" alt="Video thumbnail for {{ v.title | escape }}" loading="lazy" decoding="async"></a>{% endif %}
<h2>{{ v.title | escape }}</h2>
<p>{{ v.description | escape }}</p>
{% if v.date %}<p class="video-date"><time datetime="{{ v.date | date: '%Y-%m-%d' }}">{{ v.date | date: "%B %-d, %Y" }}</time></p>{% endif %}
{% if v.id %}<p><a href="https://www.youtube.com/watch?v={{ v.id | escape }}">Watch on YouTube <span aria-hidden="true">↗</span></a></p>{% endif %}
</article>
{% endfor %}
</div>
{% else %}
<p class="empty">No videos have been added yet. Articles are listed above; video entries will appear here when available.</p>
{% endif %}

</div>
