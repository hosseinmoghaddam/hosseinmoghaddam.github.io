---
layout: page
title: ویکی
description: ویکی
keywords: ویکی, Wiki
comments: false
menu: ویکی
permalink: /wiki/
---

> یادگیری ابزار های مفید سرعت را افزایش می دهد

<ul class="listing">
{% for wiki in site.wiki %}
{% if wiki.title != "Wiki Template" %}
<li class="listing-item"><a href="{{ site.url }}{{ wiki.url }}">{{ wiki.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
