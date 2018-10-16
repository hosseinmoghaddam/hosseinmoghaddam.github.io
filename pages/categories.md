---
layout: categories
title: دسته ها
description: 哈哈，你找到了我的文章基因库
keywords: 分类
comments: false
menu: دسته ها
permalink: /categories/
---

<section class="container posts-content">
{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
<h3>{{ category | first }}</h3>
<ol class="posts-list" id="{{ category[0] }}">
{% for post in category.last %}
<li class="posts-list-item">
<span class="posts-list-meta" ><time id="{{ post.url }}"></time></span>
                <script>
                    var date = '{{post.date}}'
                    moment.loadPersian(true);
                    var jalaliDate = moment(date, 'YYYY-M-D HH:mm:ss TZD').format('jD jMMMM jYYYY');
                    document.getElementById("{{ post.url }}").innerText = jalaliDate
                </script>
<a class="posts-list-name" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ol>
{% endfor %}
</section>

<!-- /section.content -->
