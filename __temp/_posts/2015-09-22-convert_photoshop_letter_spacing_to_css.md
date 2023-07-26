---
layout: post
title: Переносим межбуквенный интервал из Фотошопа в CSS
categories: front-end
description: Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство letter-spacing.
excerpt: Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство letter-spacing.
tags: [css, межбуквенный интервал, tools]

image:
  path: /assets/img/letter-spacing/table_of_contents.gif
  width: 490
  height: 317
  alt: Виллу Тоотс. Современный шрифт.
---

{% include media-post-image.html %}

Межбуквенный интервал в Фотошопе регулирует расстояние между символами в тексте. В CSS это свойство `letter-spacing`. Проблема в том, что межбуквенный интервал в Фотошопе не конвертируется 1:1 к межбуквенному интервалу в CSS.

{%
	include media-image.html
	url="letter-spacing/letter-spacing.png"
	width="108"
	height="22"
	alt="Межбуквенный интервал letter-spacing в Фотошопе"
%}

Хотя это легко считается по пропорции **1000** межбуквенного интервала в Фотошопе = **1em** в CSS.

Все что вам нужно, это разделить число из Фотошопа на 1000, чтобы получить значение в **em**.

## Примеры

В фотошопе|В CSS
1000|1em
200|0.2em
30|0.03em
10|0.01em