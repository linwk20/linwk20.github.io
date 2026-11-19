---
layout: default
permalink: /blog/
title: Blog
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

<div class="post blog-index">

<header class="post-header">
  <h1 class="post-title">Blog</h1>
</header>

<div class="blog-header-img">
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Landscape">
</div>

<ul class="post-list">
  {% for post in paginator.posts %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>
      <p class="post-meta">
        <i class="{{ post.icon | default: 'fa-solid fa-feather-pointed' }}" aria-hidden="true"></i>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </p>
      <h2 class="post-list-title">
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="post-list-description">
        {% if post.description %}
          {{ post.description }}
        {% else %}
          {{ post.content | strip_html | truncate: 200 }}
        {% endif %}
      </p>
      {% if tags != "" or categories != "" %}
        <p class="post-tags">
          {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"><i class="fas fa-hashtag fa-sm" aria-hidden="true"></i>{{ tag }}</a>
          {% endfor %}
          {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"><i class="fas fa-tag fa-sm" aria-hidden="true"></i>{{ category }}</a>
          {% endfor %}
        </p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

{% include pagination.liquid %}

</div>
