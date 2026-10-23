---
permalink: /gallery/
layout: splash
title: "Gallery"
description: "Academic and research gallery of Kuldeep Prajapat."
---

<div class="kp" markdown="1">

<p class="eyebrow page-eyebrow">VISUAL ARCHIVE / ACADEMIC LIFE AND RESEARCH</p>

# Gallery

A visual record of academic events, research activities, and scientific illustrations cleared for public sharing.

{% assign gallery_items = site.data.gallery %}
{% if gallery_items and gallery_items.size > 0 %}
<div class="gallery-grid">
{% for item in gallery_items %}
<figure class="gallery-card">
<a href="{{ item.image | relative_url }}" aria-label="Open full-size image: {{ item.alt | escape }}">
<img src="{{ item.image | relative_url }}" alt="{{ item.alt | escape }}" loading="lazy" decoding="async">
</a>
{% if item.caption %}<figcaption>{{ item.caption | escape }}</figcaption>{% endif %}
</figure>
{% endfor %}
</div>
{% else %}
<p class="empty"><strong>Gallery coming soon.</strong> No photographs are published here yet. Images will be added when they are available and cleared for sharing.</p>
{% endif %}

</div>
