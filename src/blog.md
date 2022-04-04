---
title: Blog
layout: layout.liquid
pagination:
  data: collections.blog
  size: 10
  alias: blogs
---

<div class="container">
  {% for blog in blogs %}
  ## [{{ blog.data.title }}]({{ blog.url }}) 
  von {{ blog.data.author }}
  {% endfor %}
</div>
