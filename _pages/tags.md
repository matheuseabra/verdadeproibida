---
layout: archive
permalink: /tags/
title: "Tags"
excerpt: Algum sub-título para descrever a página
author_profile: true
header:
  overlay_image: /assets/images/dark-triangles.png
  overlay_filter: rgba(135, 51, 46, 0.75)
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}


  <h2 id="{{ tag | slugify }}" class="btn btn--small btn--default">{{ tag }}</h2>

  {% for post in posts %}
    {% include archive-single-grid.html %}
  {% endfor %}

{% endfor %}
