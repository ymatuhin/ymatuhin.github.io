---
layout: post
title: jQuery.width() без округления
categories: front-end
description: >
  Как взять ширину элемента без округления значений до целых чисел без jQuery.
tags: [ jquery, width, getBoundingClientRect, округление ]
social_image: jquery/jquery.jpg
social_width: 1440
social_height: 770
social_alt: jQuery.width
---

{% include media-post-image.html %}

Я&nbsp;обнаружил что `jQuery.width()` округляет значения. Так-же, как и `.height()`. Из-за этого у&nbsp;меня была проблема в `1px` при некоторых разрешениях.

<!-- more -->

Если нужен размер &laquo;как есть&raquo;, то&nbsp;используйте нативный метод `getBoundingClientRect`.

## Пример

```js
$(".element")[0].getBoundingClientRect().width
$(".element")[0].getBoundingClientRect().height
// или
$(".element").get(0).getBoundingClientRect().width
$(".element").get(0).getBoundingClientRect().height
```

### Совместимость

Методу в&nbsp;обед сто лет, а&nbsp;узнал только вчера о&nbsp;нем.

{%  include
	media-image.html
	url="jquery/support.png"
	alt="Поддержка метода getBoundingClientRect"
	width="1280"
	height="440"
%}

{%
	include factoid.html
	count="97.9%"
	text="общая поддержка"
%}

Полезная информация этого поста влезает в&nbsp;твит, но&nbsp;твиты уходят в&nbsp;небытие и&nbsp;больше их&nbsp;никто не&nbsp;прочитает. Поэтому я&nbsp;публикую это в&nbsp;блоге.
