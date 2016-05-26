---
layout: post
title: Анимируем высоту c auto в CSS через transition
categories: front-end
tags: >
  CSS animation animate transitions height высота анимация анимируем 0 auto авто
description: >
  Как сделать анимацию высоты в CSS со значением auto через transition? Легко и без единой строчки javascript. Подробнее читайте в этой статье.
social_image: animate_height/transition_sign.jpg
---

{%
	include media-image.html
	url="animate_height/transition_sign.jpg"
	caption="CSS анимация высоты через transition"
%}

Пытались ли вы анимировать высоту (<code>height</code>) через <abbr title="Cascading Style Sheets">CSS</abbr>? Если пытались, то скорее всего вы знаете, что через <code>transition</code> можно задать анимацию от одного значения, до другого. И в этом есть небольшая проблема, что делать если нам нужно заанимировать высоту со значения <code>auto</code> до <code>0</code>? К сожалению просто указать свойство <code>transition</code> не даст нам никакого эффекта. Но не спешите расстраиваться, это можно сделать не прибегая к помощи <abbr title="JavaScript is the programming language of HTML and the Web.">JavaScript</abbr>.

## Так как же это сделать?
Казалось бы, безвыходная ситуация, но это не так. Мы забыли про еще одно свойство, которое может нам в этом помочь. И это свойство <code>max-height</code>. Если вы уже догадались что делать дальше, отложите чтение этой стати и попробуйте реализовать анимацию сами. А потом возвращайтесь и сравните ваше решение с моим.

Чтобы все получилось, нужно сделать несколько шагов:
<ol>
	<li>Задать достаточно большую максимальную высоту, чтобы в дальнейшем анимировать её до нужных нам размеров;</li>
	<li>Установить <code>overflow: hidden</code>, чтобы содержимое скрывалось при анимации;</li>
	<li>Помнить про <code>padding</code>, а именно про то, что если он есть, то его тоже нужно будет анимировать до 0, чтобы наш блок полностью исчез;</li>
</ol>

### Анимация высоты с 0 до auto

Демо можно <a href="/demo/animate_auto/">посмотреть тут</a>.
Исходный код на <a href="http://github.com/ymatuhin/ymatuhin.github.io/blob/master/demo/animate_auto/index.html" rel="nofollow">гитхабе</a>.
Теперь мы умеем анимировать высоту через CSS. И теперь можем делать без javascript такие штуки, как: спойлеры, выпадающие меню, раскрывающиеся попапы и т.д.
