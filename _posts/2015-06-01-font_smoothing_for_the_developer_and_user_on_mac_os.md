---
layout: post
title: Сглаживание шрифтов для разработчика и пользователя на Mac OS
categories: front-end
tags: [css, сглаживание шрифта, mac os, расширение]
social_image: font-smooth/compare.png
---

{%
	include media-image.html
	url="font-smooth/compare.png"
	caption="Сглаживание шрифтов CSS"
    noborder=""
%}

Я давно интересовался сглаживанием шрифта для веб страниц на CSS. Но «волшебные» свойства, такие как `-webkit-font-smoothing`, не работали на моем Win 7. Поэтому никакого смысла в этих css свойствах я не видел. Но сейчас у меня Mac OS и они работают! Сразу скажу я проверял только Win 7, может в более поздних версиях эти свойства тоже хоть как-то работают.

## Примеры сглаживания шрифтов

В качестве примера будут использоваться популярные и не совсем сайты. Если вам понравится результат «после», то в конце статьи вы узнаете как сделать так, чтобы так было на всех сайтах, которые вы посещаете.

<div class="clearfix">
    <div class="column-50 fl-l">
        Было ↓
        <figure itemscope itemtype="http://schema.org/ImageObject">
        	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/assets/img/font-smooth/yandex.png">
        	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
        </figure>
    </div>
    <div class="column-50 fl-l">
        Стало ↓
        <figure itemscope itemtype="http://schema.org/ImageObject">
        	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/assets/img/font-smooth/yandex_with.png">
        	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
        </figure>
    </div>
</div>


<div class="clearfix">
    <div class="column-50 fl-l">
        Было ↓
        <figure itemscope itemtype="http://schema.org/ImageObject">
        	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/assets/img/font-smooth/google_search.png">
        	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
        </figure>
    </div>
    <div class="column-50 fl-l">
        Стало ↓
        <figure itemscope itemtype="http://schema.org/ImageObject">
        	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/assets/img/font-smooth/google_search_with.png">
        	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
        </figure>
    </div>
</div>

## Используем в работе
Очень хорошо этим свойством обрабатываются подгружаемые шрифты.

~~~css
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
~~~

Вот и все, больше ничего не нужно. Теперь ваш сайт стал чуточку красивее и элегантней, хоть это и не так заметно с первого взгляда.

## Используем в браузере как пользователи
Для этого вам нужно установить расширение для Chrome / Firefox — <a href="http://userstyles.org">Stylish</a>.


В настройках создать новый стиль (write new style), назвать его (у меня Font render), поставить галочку `Enable`, и в поле `code` вставить следующий текст:

~~~css
html {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
}
~~~

И нажать на кнопку сохранить (save). Теперь можно закрыть это окно и сглаживание будет по умолчанию включено на всех сайтах. Я именно так и сделал :-)
