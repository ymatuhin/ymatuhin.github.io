---
layout: post
title: Переносим межбуквенный интервал из Фотошопа в CSS
categories: front-end
description: Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство letter-spacing.
excerpt: Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство letter-spacing.
tags: [css, межбуквенный интервал, tools]

social_image: letter-spacing/table_of_contents.gif
---

{%
	include media-image.html
	url="letter-spacing/table_of_contents.gif"
	caption="Страница из книги Виллу Тоотса «Современный шрифт»"
%}

Введите значение межбуквенного интервала ![Межбуквенный интервал letter-spacing в Фотошопе](/assets/img/letter-spacing/letter-spacing.png) из Фотошопа в поле ниже.

<!-- more -->

<input id="num" type="number" placeholder="0">

<div class="highlighter-rouge">
<pre class="highlight" id="rez">
<code class='nc'>.letter-spacing</code> { letter-spacing: <span class="m">0</span> }
</pre>
</div>

## Как это работает
Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство `letter-spacing`. Проблема в том, что межбуквенный интервал в Фотошопе не конвертируется 1:1 к межбуквенному интервалу в CSS.

Хотя это легко считается по пропорции **1000** межбуквенного интервала в Фотошопе = **1em** в CSS.

Все что вам нужно, это разделить число из Фотошопа на 1000, чтобы получить значение в **em**.

<script>
    var num = document.getElementById('num');
    var rez = document.getElementById('rez');

    num.onchange = update
    num.onkeyup = update

    function update () {
        var value = num.value / 1000;
        value = (value == 0) ? value : value + "em";
        value = (value.length > 1 && value[0] == "0") ? value.slice(1) : value;

        rez.innerHTML = "<code class='nc'>.letter-spacing</code> { letter-spacing: <span class='m'>" + value + "</span> }";
    }
</script>
