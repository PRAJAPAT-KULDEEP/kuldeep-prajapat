---
permalink: /vlog/
layout: splash
title: "Vlog"
description: "Research-life videos and science communication by Kuldeep Prajapat."
redirect_from:
  - /videos/
---

<div class="kp" markdown="1">

<p class="eyebrow page-eyebrow">FIELD NOTES / SCIENCE AND RESEARCH LIFE</p>

# Vlog

A space for research-life videos, scientific explanations, conference experiences, and educational content.

{% assign vids = site.data.videos %}
{% if vids and vids.size > 0 %}
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
<p class="empty"><strong>Vlog coming soon.</strong> No videos have been published here yet. This page will feature research-life stories, conference experiences, and accessible explanations when they are ready to share.</p>
{% endif %}

</div>
