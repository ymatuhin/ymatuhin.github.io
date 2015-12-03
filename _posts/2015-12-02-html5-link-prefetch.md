---
layout: post
title: 'Ускоряем загрузку ресурсов для сайта: preconnect, prefetch, prerender, preloading…'
categories: front-end
description: HTML5 Link Prefetch указывает браузеру какие ресурсы вам понадобятся в будущем на сайте и максимально подготовит их дальнейшую загрузку.
image: /img/link_prefetch/html5_link_prefetch.png
tags: [cdn, preconnect, prefetch, prerender, preloading, оптимизация]
---

Сегодня мы рассмотрим «HTML5 Link Prefetch», а именно dns-prefetch, prefetch, preconnect, subresource, prerender и еще неработающий preload. HTML5 Link Prefetch уменьшит время загрузки для ресурсов, которые нам понадобятся позже.

![html5 link prefetch](/img/link_prefetch/html5_link_prefetch.png)

Для наглядности я позаимствовал слайд [@igrigorik](https://twitter.com/igrigorik), в котором наглядно видно что к чему относится.

<!-- more -->

## Dns-prefetch

Если у вас на сайте содержимое загружается через DNS, то укажите браузеру в атрибуте адрес DNS. И браузер начнет предварительную загрузку (prepresolve) до момента загрузки ресурсов. [Поддержка браузерами](http://caniuse.com/#search=dns-prefetch) и пример:

{% highlight html %}
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//ajax.googleapis.com">
{% endhighlight %}

Пример для Amazon CDN:

{% highlight html %}
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel='dns-prefetch' href='http://g-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://z-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://completion.amazon.com'>
<link rel='dns-prefetch' href='http://fls-na.amazon.com'>
{% endhighlight %}

## Preconnect

Похоже на dns-prefetch, только круче. Помимо DNS устанавливает TCP, TLS связь. Помогает предгрузить соединение для веб сокетов. [Поддержка браузерами](http://caniuse.com/#search=preconnect) и пример:

{% highlight html %}
<link rel="preconnect" href="//www.example.com">
{% endhighlight %}

## Prefetch

Указываем браузеру что этот ресурс потребуется нам и браузер загрузит его с низким приоритетом и положит в кэш.

Браузер может не загрузить большие файлы при медленном соединении, а Firefox загружает ресурсы только в режиме простоя. [Поддержка браузерами](http://caniuse.com/#search=prefetch) и пример:

{% highlight html %}
<!-- всю страницу -->
<link rel="prefetch" href="http://ymatuhin.ru">

<!-- только изображение -->
<link rel="prefetch" href=http://ymatuhin.ru/img/yury_matuhin.jpg">
{% endhighlight %}


## Subresource

То-же что и prefetch, только с высоким приоритетом. Поэтому я бы рекомендовал добавлять этот атрибут для критических стилей. [Поддержка браузерами](http://caniuse.com/#search=subresource) и пример:

{% highlight html %}
<link rel="subresource" href="critical/app.js">
<link rel="subresource" href="critical/style.css">
{% endhighlight %}

## Prerender

Этот параметр заранее загружает ресурс или страницу и всё её содержимое в фоне. Это как открытие страницы в фоновой вкладке. Браузер загрузит все ресурсы, построит DOM, применит CSS и JS. А когда пользователь перейдет по ссылке, скрытая страница станет заместо текущей и загрузится моментально.

В Google поиске давно действует такая штука под названием Instant Pages, Microsoft недавно объявили что они будут использовать prerender в Bing на IE11. [Поддержка браузерами](http://caniuse.com/#search=prerender) и пример:

{% highlight html %}
<link rel="prerender" href="http://ymatuhin.ru/index.html">
{% endhighlight %}

## Preloading

Эта штука еще не работает, но её внесли в [спецификацию](https://w3c.github.io/preload/). Работает так-же как и prefetch, но браузер всегда загрузит ресурс. Аналог прелоадеров для картинок, только нативный. Пока он не поддерживается, используйте prefetch. Пример:

{% highlight html %}
<link rel="preload" href="image.png">
{% endhighlight %}

## Добавление через JavaScript

Не обязательно указывать эти теги в HTML, генерируйте по мере необходимости для нужных ресурсов:

{% highlight javascript %}
function add_hint(type, url) {
    if (!type || !url) return;

    var el = document.createElement("link");
    el.setAttribute("rel", type);
    el.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(el);
}

add_hind('prefetch', 'http://ya.ru');
{% endhighlight %}

### Дополнительная информация
На этом сайте я использую prefetch для подготовке к загрузке файла, который подсвечивает код, если такой блок находится на странице. Dns-prefetch для ускорения загрузки яндекс метрики. И скрипт, для ускорения переходов между страницами:

{% highlight javascript %}
document.addEventListener("mousemove", function (e) {
    if (!e.target.href ||
        e.target.href.indexOf(location.host) == -1 ||
        e.target.hintAdded) return;

    // функция описана выше
    add_hint('prerender', e.target.href);
    e.target.hintAdded =  true;
});
{% endhighlight %}

Если браузер не поддерживает HTML5 Link Prefetch, то проигнорирует эти атрибуты, поэтому их можно безопасно использовать.

### Полезные ссылки
* [Slides from a talk by Ilya Grigorik called Preconnect, prerender, prefetch](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLna)
* [MDN link prefetching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ)
* [W3C resource-hints](http://www.w3.org/TR/resource-hints/)
