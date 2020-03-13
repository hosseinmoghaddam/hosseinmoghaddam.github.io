---
layout: post
title: توسعه سایت های jekyll بوسیله vagrant
categories: Jekyll
description: توسعه فریمورک jekyll روی vagrant
keywords: jekyll , vagrant , جیکیل , واکرانت
image: https://hossein-moghadam.ir/images/blog/devJekwhVag/jekyllandvagrant.jpg
---
# توسعه سایت های jekyll بوسیله vagrant
![](https://hossein-moghadam.ir/images/blog/devJekwhVag/jekyllandvagrant.jpg)
چند وقتی هست که یه سایت شخصی با فریمورک jekyll بالا اوردم. سیستم عامل من ویندوز هست و اما یک لینوکس کنار ویندوزم نصب دارم برای بالا اوردن یک سایت jekyll لازمه که زبان برنامه نویسی روبی رو نصب کنید روبی روی ویندوز حسابی اذیت میکنه اینو میگم چون تجربشو دارم پس به سراغ لینوکس رفتم چند وقتی سایت رو روی لینوکس توسعه داده ام اما واقعا کار سختی بود چون هر دفعه میخواستم توی سایت تغییر ایجاد کنم لازم بود از ویندوز خارج بشم و وارد لینوکس بشم هر دفعه این کارو می کردم واقعا کلافه می شدم از طرفی با vagrant که یک ابزار توسعه هست آشنا بودم پس به سراغ vagrant رفتم اینجا سعی می کنم تجربه ای که داشتم رو برای شما به اشتراک بذارم.
اول از همه باید vagrant رو نصب کنیم برای نصب به سایت [vagrantup](https://www.vagrantup.com/)  برید البته تحریم هست و باید فیلتر شکن  یا پروکسی روشن کنید. بعد از نصب یه فایل به اسم Vagrantfile بدون پسوند توی فولدر پروژه تون بسازید.

![](https://hossein-moghadam.ir/images/blog/devJekwhVag/vagrantfile.jpg)

حالا برای نصب باکس مناسب روی vagrant  و کانفیگ های اولیه قطعه کد زیرو توی Vagrantfile کپی کنید.

```shell
Vagrant.configure("2") do |config|
  config.vm.box = "scalarae/jekyll"
  config.vm.box_version = "1.0.0"
  config.vm.network "forwarded_port", host: 4000, guest: 4000
end
```

این باکس از پیش ساخته شده برای توسعه jekyll و لازم نیست شما چیزی رو روش نصب کنید.

در قدم بعدی توی خط فرمان دستور زیر رو تایپ کنید تا باکسی که درون فایل تعریف کردیم دانلود و اجرا شود.

```shell
vagrant up
```

پس از دانلود و اجرای موفقیت آمیز باکس شما میتونید به با دستور زیر به فولدر پروژه رفته و اون رو اجرا کنید.

```shell
cd /vagrant/
```
با استفاده از دستور زیر میتونید پروژه jekyll خودتون رو اجرا کنید.

```shell
jekyll serve --host=0.0.0.0 
```

اینم تصوری از اجرای درست jekyll

![](https://hossein-moghadam.ir/images/blog/devJekwhVag/success.jpg)
آپشن 0.0.0.0=host-- به شما اجازه می ده تا سایت رو روی مرورگر ویندوز خودتون با آدرس زیر  بالا بیارید
 
```
http://127.0.0.1:4000/
```

اگر به مشکلی برخوردید میتونید در پایین مشکلتون رو عنوان کنید.😉