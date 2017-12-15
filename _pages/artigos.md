---
layout: archive
title: "Artigos recentes"
permalink: /artigos/
author_profile: false
excerpt: Algum sub-título para descrever a página
sidebar:
  nav: "docs"
header:
  overlay_image: /assets/images/dark-triangles.png
  overlay_filter: rgba(135, 51, 46, 0.75)
---

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% include paginator.html %}
