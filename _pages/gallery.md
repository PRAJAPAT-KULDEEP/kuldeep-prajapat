---
permalink: /gallery/
layout: splash
title: "Gallery"
description: "Academic and research gallery of Kuldeep Prajapat."
---

<div class="kp" markdown="1">

<p class="eyebrow page-eyebrow">VISUAL ARCHIVE / ACADEMIC LIFE AND RESEARCH</p>

# Gallery

A visual record of conferences, workshops, and research activities.

{% assign gallery_sections = site.data.gallery %}
{% for section in gallery_sections %}
<section class="kp-section gallery-section" id="conference-{{ forloop.index }}">
  <div class="section-heading">
    <div>
      <p class="section-kicker">{{ forloop.index | prepend: "0" | slice: -2, 2 }} / CONFERENCE GALLERY</p>
      <h2>{{ section.title | escape }}</h2>
      {% if section.location and section.location != "" %}
      <p class="section-intro">{{ section.location | escape }}</p>
      {% endif %}
      {% if section.date and section.date != "" %}
      <p class="meta">{{ section.date | escape }}</p>
      {% endif %}
    </div>
  </div>

  {% if section.photos and section.photos.size > 0 %}
  <div class="gallery-grid">
    {% for photo in section.photos %}
    <figure class="gallery-card">
      <a href="{{ photo.image | relative_url }}" aria-label="Open full-size image: {{ photo.alt | escape }}">
        <img src="{{ photo.image | relative_url }}" alt="{{ photo.alt | escape }}" loading="lazy" decoding="async">
      </a>
      {% if photo.caption or photo.profile_url %}
      <figcaption>
        {% if photo.caption %}{{ photo.caption | escape }}{% endif %}
        {% if photo.profile_url %}
        {% if photo.caption %} {% endif %}<a href="{{ photo.profile_url | escape }}" target="_blank" rel="noopener noreferrer">{{ photo.profile_label | default: "Research profile" | escape }}</a>
        {% endif %}
      </figcaption>
      {% endif %}
    </figure>
    {% endfor %}
  </div>
  {% else %}
  <p class="empty">Photographs and captions for this event will be added here.</p>
  {% endif %}
</section>
{% endfor %}

</div>
