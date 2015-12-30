---
layout: post
title: Контрольные точки медиа выражений Bootstrap
description: >
  Какие контрольные точки для media queries используются в css фреймворке Bootstrap для мобильных устройств? Почему медиа выражения с EM лучше чем с PX?
categories: front-end
redirect_from:
  - /blog/media_quires_breakpoins/
tags: [bootstrap, media quires, медиа выражения]

image: media_queries/bootstrap.png
imageWidth: 960
imageHeight: 489
imageCaption: Контрольные точки медиа выражений (media quires) Twitter Bootstrap
---

Twitter Bootstrap&nbsp;&mdash; самый популярный CSS фреймворк. У&nbsp;него более 85&nbsp;495 звезд и&nbsp;35&nbsp;055 форков на&nbsp;<a href="https://github.com/twbs/bootstrap" rel="nofollow">GitHub</a>. А&nbsp;19&nbsp;августа вышла <a href="http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/" rel="nofollow">4&nbsp;альфа версия</a>, в&nbsp;которой разработчики используют <code>rem</code> для адаптивной верстки. Но&nbsp;не&nbsp;в&nbsp;медиа выражениях, которые остаются такими-же как и&nbsp;были.

<!-- more -->

Bootstrap использует 5&nbsp;контрольных точек для медиа выражений: **320px**, **544px**, **768px**, **992px**, **1200px**. Этот фреймворк следует методике mobile first, в&nbsp;которой сначала сайта разрабатывается для мобильных устройств, а&nbsp;потом появляется для десктопов.

~~~css
/*==========  Mobile First  ==========*/

/* Телефоны —  544px */
@media (min-width : 34em) {}

/* Планшеты — 768px */
@media (min-width : 48em) {}

/* Десктоп — 992px */
@media (min-width : 62em) {}

/* Широкоформатный экран — 1200px */
@media (min-width : 75em) {}
~~~

Но&nbsp;иногда верстку для десктопа нужно адаптировать для мобильных устройств. Для этого используйте следующие медиа выражения:

~~~css
/*==========  Non-Mobile First  ==========*/

/* Широкоформатный экран — 1200px */
@media (max-width : 75.063em) {}

/* Десктоп — 992px */
@media (max-width : 62.063em) {}

/* Планшеты — 768px */
@media (max-width : 48.063em) {}

/* Телефоны —  544px */
@media (max-width : 34.063em) {}

/* Айфон в портретном режиме — 320px */
@media (max-width : 20.063em) {}
~~~

Шестьдесят три сотых ема&nbsp;&mdash; это один пиксель. Он&nbsp;нужен чтобы наше выражение сработало когда ширина экрана станет нужной (320, 544, 768...).

**Дополнение #1**&nbsp;&mdash; В&nbsp;медиа выражениях не&nbsp;используются никакие <code>screen</code> и <code>only screen</code>.
**Дополнение #2**&nbsp;&mdash; <code>em</code> зависят от&nbsp;размера шрифта у <code>body</code>. Он&nbsp;должен быть равен 16px чтобы все работало как нам нужно.
**Дополнение #3**&nbsp;&mdash; Предпочтительней использовать <code>em</code> вместо пикселей, чтобы ваша верстка не&nbsp;поехала если пользователь изменил стандартный размер шрифта.
**Дополнение #4** — Значение <code>em</code> в медиа выражениях эквавалентно 16 пикселям, и не зависит от размера шрифта у <code>html</code> или <code>body</code>.

Если вам нужно больше контрольных точек, то&nbsp;отталкивайтесь от&nbsp;этих размеров экранов&nbsp;&mdash; 120, 160, 240, 320, 360, 480, 540, 576, 600, 640, 720, 768, 800, 864, 900, 960, 1024, 1050, 1080, 1152, 1200, 1440, 1536, 1600, 1620, 1800, 2048, 2160, 2400, 3072, 3200, 3240, 4096, 4320, 4800.

<!-- <footer class="keywords section-subtitle visuallyhidden" aria-hidden="true" role="contentinfo">
    <h3>media queries</h3>
    <h3>css media queries</h3>
    <h4>bootstrap media queries</h4>
    <h4>media queries в css3</h4>
    <h5>media query width</h5>
</footer> -->
