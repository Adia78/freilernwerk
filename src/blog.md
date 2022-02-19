---
title: Blog
layout: layout.liquid
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---

<div class="container">
  {% for blog in blogs %}
  - [{{blog.data.title}}]({{blog.url}})
  {% endfor %}
</div>
