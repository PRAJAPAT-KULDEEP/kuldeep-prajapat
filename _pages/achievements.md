---
permalink: /achievements/
layout: splash
title: "Achievements"
description: "Education, awards, fellowships, grants, talks and other verified milestones of Kuldeep Prajapat, IIT Mandi."
sitemap: false
noindex: true
---

<div class="kp" markdown="1">

# Achievements

{% if site.data.achievements.size > 0 %}
<ul class="tl">
{% for a in site.data.achievements %}<li><p class="meta">{{ a.year }}, {{ a.category }}</p><strong>{{ a.title }}</strong>{% if a.detail %}<br>{{ a.detail }}{% endif %}{% if a.source %} <a href="{{ a.source }}">Source</a>{% endif %}</li>
{% endfor %}</ul>
{% else %}
<p class="empty">Academic profile details will be added here.</p>
{% endif %}

</div>
