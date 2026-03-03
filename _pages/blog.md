---
layout: default
permalink: /blog/
title: ✍️ Blog
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  per_page: 5
  permalink: /page/:num/
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3  # The number of links after the current page
---

<div class="post">

<div class="blog-header-img" style="width: 100%; height: 300px; overflow: hidden; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Landscape" style="width: 100%; height: 100%; object-fit: cover;">
</div>

<ul class="post-list">
  {% for post in paginator.posts %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li style="margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px dashed #e0e0e0;">
      <h3>
        <a class="post-title" href="{{ post.url | relative_url }}" style="text-decoration: none;">
          <i class="{{ post.icon | default: 'fa-solid fa-feather-pointed' }}" style="color: #555; margin-right: 8px;"></i> {{ post.title }}
        </a>
      </h3>
      <p class="post-meta" style="color: #888; font-size: 0.9em; margin-top: 5px;">
        <i class="fa-regular fa-calendar"></i> {{ post.date | date: "%B %-d, %Y" }}
      </p>
      <p class="post-tags">
        {% if tags != "" %}
          {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"><i class="fas fa-hashtag fa-sm"></i> {{ tag }}</a> &nbsp;
          {% endfor %}
        {% endif %}

        {% if categories != "" %}
          {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"><i class="fas fa-tag fa-sm"></i> {{ category }}</a> &nbsp;
          {% endfor %}
        {% endif %}
      </p>
      <p>
        {% if post.description %}
          {{ post.description }}
        {% else %}
          {{ post.content | strip_html | truncate: 200 }}
        {% endif %}
      </p>
    </li>
  {% endfor %}
</ul>

{% include pagination.liquid %}

</div>

