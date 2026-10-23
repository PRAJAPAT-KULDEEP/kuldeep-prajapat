---
permalink: /
layout: splash
title: "Physics, Research & Scientific Journal"
description: "Kuldeep Prajapat, IIT Mandi: theoretical and computational atomic, molecular and optical physics. Photoionization, electron correlation and ultrafast dynamics in clusters, fullerenes and endohedral systems."
redirect_from:
  - /about/
  - /about.html
---

<div class="kp" markdown="1">

<section class="hero" markdown="1">
<div markdown="1">
<p class="eyebrow">ATOMIC, MOLECULAR AND OPTICAL PHYSICS</p>

# Exploring correlated electron dynamics in atomic clusters and endohedral systems.

I study the structural and ultrafast electronic dynamics of atomic clusters, fullerenes, and endohedral systems. My research focuses on photoionization, electron correlation, collective electronic excitations, plasmonic resonant interatomic Coulombic decay, and electron entanglement.

Using theoretical and computational approaches, I investigate correlated electronic processes across femtosecond and attosecond timescales.

<p><a class="kp-btn" href="{{ '/research/' | relative_url }}">Explore My Research</a><a class="kp-btn alt" href="{{ '/year-archive/' | relative_url }}">Read the Journal</a><a href="https://scholar.google.com/citations?user=R3HZ-pkAAAAJ">View Academic Profile</a></p>
</div>
<figure>
<svg viewBox="0 0 240 240" role="img" aria-label="Schematic dipole photoelectron angular distribution: two lobes along the light-polarization axis with an atom at the centre">
<g fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="2"><path d="M120 120C80 70 88 10 120 10S160 70 120 120Z"/><path d="M120 120C80 170 88 230 120 230S160 170 120 120Z"/></g>
<path d="M120 4V236" stroke="currentColor" stroke-opacity=".5" stroke-dasharray="4 5"/>
<circle cx="120" cy="120" r="7" fill="currentColor"/>
</svg>
<figcaption>Schematic only: a dipole (β = 2) photoelectron angular distribution. Not a research result.</figcaption>
</figure>
</section>

<section markdown="1">
## Research Interests

My research explores how electronic structure, electron–electron interactions, and collective excitations influence ionization and ultrafast electronic processes in complex atomic and molecular systems.

- Cluster Physics
- Fullerene Systems
- Endohedral Systems
- Photoionization
- Plasmonic Resonant ICD (RICD)
- Interatomic Coulombic Decay (ICD)
- Electron Correlation and Entanglement
- Attosecond Dynamics
- Photoelectron Angular Distributions
- Wigner–Smith Time Delays
{: .chips}
</section>

<section markdown="1">
## Theoretical and Computational Approaches

I use complementary theoretical and computational tools to investigate photoionization and correlated electron dynamics.

<div class="cards" markdown="1">
<div markdown="1">
### Time-Dependent Density Functional Theory (TDDFT)
A theoretical framework for investigating electronic response and time-dependent processes.
</div>
<div markdown="1">
### Photoelectron Angular Distributions
Analysis of angular emission patterns to investigate ionization dynamics and the underlying electronic structure.
</div>
<div markdown="1">
### Wigner–Smith Time Delays
A framework for examining temporal characteristics associated with scattering and photoionization processes.
</div>
<div markdown="1">
### Classical-Trajectory Monte Carlo (CTMC)
A trajectory-based computational approach for studying selected dynamical processes in atomic and molecular systems.
</div>
</div>
</section>

<section markdown="1">
## Research in Focus

Three research themes. The figures are placeholders until original results are added.

<div class="cards" markdown="1">
<div class="fig" markdown="1">
<p class="meta">Fullerene systems</p>
### Collective excitations and ionization in fullerene systems
How collective electronic excitations shape photoionization in fullerene cages. [Research page]({{ '/research/' | relative_url }})
</div>
<div class="fig" markdown="1">
<p class="meta">Photoionization</p>
### Photoionization and correlated electron dynamics
How electron–electron interactions influence the energies and emission angles of photoelectrons. [Research page]({{ '/research/' | relative_url }})
</div>
<div class="fig" markdown="1">
<p class="meta">Ultrafast dynamics</p>
### Ultrafast processes, interatomic decay, and photoelectron time delays
Interatomic decay mechanisms and the timing of photoionization on femtosecond and attosecond scales. [Research page]({{ '/research/' | relative_url }})
</div>
</div>
</section>

<section markdown="1">
## From the Physics Journal

{% for post in site.posts limit:3 %}
<article class="entry"><p class="meta">{{ post.date | date: "%-d %B %Y" }}{% if post.categories.size > 0 %}, {{ post.categories | first }}{% endif %}, {{ post.content | number_of_words | divided_by: site.words_per_minute | plus: 1 }} min read</p><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3><p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p><p><a href="{{ post.url | relative_url }}">Read Article</a></p></article>
{% else %}
<p class="empty">Articles coming soon.</p>
{% endfor %}
</section>

<section markdown="1">
## Physics Beyond the Page

This space brings together video explanations, lectures, and discussions of physics, connecting theoretical ideas with accessible scientific storytelling.

{% if site.data.videos.size > 0 %}
<div class="vgrid">{% for v in site.data.videos limit:3 %}{% include video-card.html v=v %}{% endfor %}</div>

[All videos]({{ '/videos/' | relative_url }})
{% else %}
<p class="empty">Videos coming soon.</p>
{% endif %}
</section>

<section markdown="1">
## Academic Profile

My academic record is kept on these pages and external profiles.

<ul>
<li><a href="{{ '/cv/' | relative_url }}">Academic CV</a></li>
<li><a href="{{ '/publications/' | relative_url }}">Publications</a></li>
<li><a href="{{ '/talks/' | relative_url }}">Conference presentations</a></li>
<li><a href="{{ '/achievements/' | relative_url }}">Achievements</a></li>
<li><a href="https://scholar.google.com/citations?user=R3HZ-pkAAAAJ">Google Scholar</a></li>
{% if site.author.orcid %}<li><a href="{{ site.author.orcid }}">ORCID</a></li>{% endif %}
</ul>
</section>

<section markdown="1">
## Research, Understanding, and Scientific Communication

Alongside research, I value the communication of scientific ideas through clear explanations, mathematical reasoning, and thoughtful discussion. This website serves as a space for sharing physics articles, research perspectives, educational material, and scientific videos.

My aim is to connect rigorous scientific thinking with accessible explanations while preserving the distinctions between established results, open questions, and developing research ideas.
</section>

<section markdown="1">
## Connect and Collaborate

For academic correspondence, research discussions, and scientific collaboration, please use the contact details and professional links listed in my academic profile.

[Contact]({{ '/contact/' | relative_url }})
</section>

</div>
