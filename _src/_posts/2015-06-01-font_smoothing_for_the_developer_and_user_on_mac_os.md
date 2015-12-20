---
layout: post
title: Сглаживание шрифтов для разработчика и пользователя на Mac OS
categories: front-end
redirect_from:
  - /blog/font_smoothing_for_the_developer_and_user_on_mac_os/
tags: [css, сглаживание шрифта, mac os, расширение]
image: font-smooth/compare.png
imageWidth: 1040
imageHeight: 380
imageSpace: 1em
imageCaption: Сглаживание шрифтов CSS
imageTitle: Сглаживание шрифтов
---

Я давно интересовался сглаживанием шрифта для веб страниц на CSS. Но «волшебные» свойства, такие как `-webkit-font-smoothing`, не работали на моем Win 7. Поэтому никакого смысла в этих css свойствах я не видел. Но сейчас у меня Mac OS и они работают! Сразу скажу я проверял только Win 7, может в более поздних версиях эти свойства тоже хоть как-то работают.

## Примеры сглаживания шрифтов

В качестве примера будут использоваться популярные и не совсем сайты. Если вам понравится результат «после», то в конце статьи вы узнаете как сделать так, чтобы так было на всех сайтах, которые вы посещаете.

До ↓
<figure itemscope itemtype="http://schema.org/ImageObject">
	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/img/font-smooth/yandex.png">
	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
</figure>
<!-- <img class="bordered" src="/img/font-smooth/yandex.png" atl="yandex.ru со сглаживанием по умолчанию на Mac OS"> -->
После ↓
<figure itemscope itemtype="http://schema.org/ImageObject">
	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/img/font-smooth/yandex_with.png">
	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
</figure>
<!-- <img class="bordered" src="/img/font-smooth/yandex_with.png" atl="yandex.ru со сглаживанием antialiased на Mac OS"> -->

До ↓
<figure itemscope itemtype="http://schema.org/ImageObject">
	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/img/font-smooth/google_search.png">
	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
</figure>

После ↓
<figure itemscope itemtype="http://schema.org/ImageObject">
	<img class="bordered" itemprop="contentUrl" alt="Сравнение сглаживаний шрифтов в Mac OS" src="/img/font-smooth/google_search_with.png">
	<figcaption itemprop="description">Сравнение сглаживаний шрифтов в Mac OS</figcaption>
</figure>


<!--
    <a target="_blank" href="/img/font-smooth/google_search.png"><img class="inline bordered rounded" width="49%" src="/img/font-smooth/google_search.png" atl="google.ru со сглаживанием по умолчанию на Mac OS"></a>
    <a target="_blank" href="/img/font-smooth/google_search_with.png"><img class="inline bordered rounded" width="49%" src="/img/font-smooth/google_search_with.png" atl="google.ru со сглаживанием antialiased на Mac OS"></a>
 -->

## Используем в работе
Очень хорошо этим свойством обрабатываются подгружаемые шрифты.

~~~js
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
~~~

Вот и все, больше ничего не нужно. Теперь ваш сайт стал чуточку красивее и элегантней, хоть это и не так заметно с первого взгляда.

## Используем в браузере как пользователи
Для этого вам нужно установить расширение для Chrome / Firefox — <a href="http://userstyles.org">Stylish</a>.


В настройках создать новый стиль (write new style), назвать его (у меня Font render), поставить галочку `Enable`, и в поле `code` вставить следующий текст:

~~~js
html {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
}
~~~

И нажать на кнопку сохранить (save). Теперь можно закрыть это окно и сглаживание будет по умолчанию включено на всех сайтах. Я именно так и сделал :-)
