---
layout: page
title: درباره
description: درباه خودم
keywords: hossein moghadam , حسین مقدم , moghadam , حسین قربانی مقدم ,
comments: true
menu: درباره
permalink: /about/
---

من حسین مقدم هستم عاشق حل مسئله و این حرفا .

فارق التحصل مهندسی نرم افزار هستم و به طراحی و گرافیک هم علاقه دارم اما فقط علاقه.

اگه دوست داری منو بیشتر بشناسی بهتر به قسمت رزومه یه سر بزنی.


## شبکه های اجتماعی که عضوم 👇 

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
