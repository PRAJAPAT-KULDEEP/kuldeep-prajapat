---
permalink: /gallery/
layout: splash
title: "Gallery"
description: "Academic and research gallery of Kuldeep Prajapat."
---

<div class="kp" markdown="1">

<p class="eyebrow page-eyebrow">VISUAL ARCHIVE / ACADEMIC LIFE AND RESEARCH</p>

# Gallery

A visual record of conferences, workshops, and research activities. Each photograph has its own sharing controls. LinkedIn and Facebook share the image link; use Download image when a platform requires you to upload the photograph itself. The ResearchGate option copies the caption and link for you to paste there.

{% assign gallery_sections = site.data.gallery %}
{% for section in gallery_sections %}
<section class="kp-section gallery-section {% if section.title contains 'WUFXS 2026' %}gallery-section--wufxs{% endif %}" id="conference-{{ forloop.index }}">
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
    {% capture gallery_share_text %}{{ photo.alt }}{% if photo.caption %}. {{ photo.caption }}{% endif %} — Kuldeep Prajapat{% endcapture %}
    {% capture gallery_image_url %}{{ photo.image | absolute_url }}{% endcapture %}
    {% capture gallery_image_url_encoded %}{{ gallery_image_url | uri_escape }}{% endcapture %}
    <figure class="gallery-card{% if section.title contains 'WUFXS 2026' %}{% if forloop.first %} gallery-card--feature{% elsif forloop.last %} gallery-card--closing{% else %} gallery-card--supporting{% endif %}{% endif %}">
      <a class="gallery-image-frame" href="{{ photo.image | relative_url }}" aria-label="Open full-size image: {{ photo.alt | escape }}">
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
      <div class="gallery-share"
           data-image-url="{{ gallery_image_url | strip | escape }}"
           data-image-title="{{ photo.alt | escape }}"
           data-share-text="{{ gallery_share_text | strip | escape }}">
        <span class="gallery-share__label">Share image</span>
        <button type="button" class="gallery-share__button gallery-share__button--primary" data-gallery-share-action="share" aria-label="Open device share options for image: {{ photo.alt | escape }}"><i class="fa fa-share-alt" aria-hidden="true"></i><span>More</span></button>
        <a class="gallery-share__button gallery-share__button--linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url={{ gallery_image_url_encoded | strip }}" target="_blank" rel="noopener noreferrer" aria-label="Share image link on LinkedIn: {{ photo.alt | escape }}"><i class="fab fa-linkedin-in" aria-hidden="true"></i><span>LinkedIn</span></a>
        <a class="gallery-share__button gallery-share__button--facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ gallery_image_url_encoded | strip }}" target="_blank" rel="noopener noreferrer" aria-label="Share image link on Facebook: {{ photo.alt | escape }}"><i class="fab fa-facebook-f" aria-hidden="true"></i><span>Facebook</span></a>
        <button type="button" class="gallery-share__button gallery-share__button--researchgate" data-gallery-share-action="copy-researchgate" aria-label="Copy caption and image link for ResearchGate: {{ photo.alt | escape }}"><i class="ai ai-researchgate" aria-hidden="true"></i><span>ResearchGate</span></button>
        <button type="button" class="gallery-share__button" data-gallery-share-action="copy-link" aria-label="Copy direct image link: {{ photo.alt | escape }}"><i class="fa fa-link" aria-hidden="true"></i><span>Copy link</span></button>
        <a class="gallery-share__button" href="{{ photo.image | relative_url }}" download aria-label="Download image: {{ photo.alt | escape }}"><i class="fa fa-download" aria-hidden="true"></i><span>Download</span></a>
        <span class="gallery-share__status" role="status" aria-live="polite"></span>
      </div>
    </figure>
    {% endfor %}
  </div>
  {% else %}
  <p class="empty">Photographs and captions for this event will be added here.</p>
  {% endif %}
</section>
{% endfor %}

</div>

<script src="{{ '/assets/js/gallery-share.js' | relative_url }}" defer></script>
