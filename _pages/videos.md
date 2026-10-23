---
permalink: /videos/
layout: splash
title: "Videos"
description: "Physics Beyond the Page: video explanations and lectures on photoionization, interatomic Coulombic decay, fullerenes and attosecond physics by Kuldeep Prajapat."
---

<div class="kp" markdown="1">

# Physics Beyond the Page

This space brings together video explanations, lectures, and discussions of physics, connecting theoretical ideas with accessible scientific storytelling.

{% assign vids = site.data.videos %}
{% if vids.size > 0 %}
{% assign f = vids | first %}
<div class="vframe"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/{{ f.id }}" title="{{ f.title | escape }}" allow="encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>

## {{ f.title }}

{{ f.description }}

{% if vids.size > 1 %}
## Archive

<div class="vgrid">{% for v in vids offset:1 %}{% include video-card.html v=v %}{% endfor %}</div>
{% endif %}
{% else %}
<p class="empty">Videos coming soon.</p>
{% endif %}

</div>
