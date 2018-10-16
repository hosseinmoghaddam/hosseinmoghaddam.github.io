---
layout: page
title: درباره
description: درباه خودم
keywords: hossein moghadam , حسین مقدم , moghadam , حسین قربانی مقدم ,
comments: true
menu: درباره
permalink: /about/
---

من حسین هستم شاید عاشق برنامه نویسی (هنوز مطمئن نیستم).

فارق التحصل مهندسی نرم افزار هستم و به طراحی و گرافیک هم علاقه دارم اما فقط علاقه.


## اگه دوست داری بامن تماس بگیری 😍 

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }})
{% endfor %}

## مهارت های من 

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
