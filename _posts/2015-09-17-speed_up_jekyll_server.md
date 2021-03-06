---
layout: post
title: Ускоряем сборку блога на Jekyll
categories: front-end
tags: [jekyll, блог]

image:
  path: /assets/img/jekyll/jekyll-logo.png
  width: 960
  height: 480
  alt: Логотип Jekyll
---

{% include media-post-image.html %}

[Jekyll](https://jekyllrb.com/) — генератор статических сайтов. Чаще всего используется для блогов как альтернатива WordPress. Набрал свою популярность вместе с GitHub, который позволяет разместить в GitHub Pages ваш сайт на Jekyll. Таким образом у вас есть бесплатный хостинг для Jekyll сайта на домене 3 уровня, который можно перенаправить на любой другой домен (как у меня сейчас).

Но в Jekyll есть минус. Когда возрастает количество записей/стилей/скриптов/плагинов, то скорость сборки оставляет желать лучшего. Даже у меня, с моими ~30 страницами проект собирался 25 секунд.



Это было не так критично, когда нужно было немного заменить CSS или написать новую статью. Но когда я взялся за редизайн, то это был ужас. Меняешь 5 строк, ждешь 25 секунд, смотришь что получилось, меняешь и снова ждешь. Думаю вы меня поняли.

## Что влияет на скорость сборки Jekyll
* количество плагинов и скорость выполнения каждого из них
* количество компилируемых стилей (Sass)
* долго выполняющиеся операции, к примеру сборка Sass и вставка инлайном в `head`
* количество страниц на сайте

Если мы безболезненно решим эти проблемы, то существенно сократим время сборки.

### Ускоряем
Удалять плагины, страницы и менять их дизайн для более быстрой сборки — большой шаг, который займет много времени. Поэтому для ускорения я предлагаю 2 варианта: перенести компиляцию Sass на систему сборки (gulp, grunt, webpack) и уменьшить ограничить количество страниц при сборке во время разработки.

Про настройку системы сборки вы можете почитать на официальных сайтах [gulp](http://gulpjs.com/), [grunt](http://gruntjs.com/) и [webpack](https://webpack.github.io/).

А я предлагаю вам хак для быстрой сборки во время разработки или написания новой статьи. При запуске сервера, мы просто указываем в параметрах лимит на количество записей.

~~~bash
jekyll s -limit_posts 3
~~~

Так соберется только три последние страницы с вашего блога. Это позволит вам редактировать последние три статьи, стили, скрипты и разметку вашего сайта с быстрой пересборкой.

Скорость возрастет в несколько раз. Использование только этого метода сократило время на пересборку проекта с 25 секунд, до четырех.
