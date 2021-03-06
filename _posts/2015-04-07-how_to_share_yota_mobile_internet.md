---
layout: post
title: Как снять ограничения Yota на раздачу интернета
categories: blog
tags: >
  снять обойти убрать отключить обмануть ограничение режет запрет скорость интернета yota йота windows mac os
description: >
  Как обойти ограничение скорости на раздачу интернета в Yota. Снятие ограничений и запретов.

image:
  path: /assets/img/
  path: /assets/img/yota/yota.png
  width: 225
  height: 300
  alt: Yota — снимаем ограничение скорости
---

В моем городе стал доступен для подключения мобильный оператор — Yota. Что привлекательного в нем? Цена 240 рублей в месяц и **безлимитный мобильный интернет** c поддержкой 4G.

{% include media-post-image.html %}

Но есть одна проблема, этим интернетом нельзя поделиться на ваш компьютер (через wifi к примеру). Точнее говоря можно, но у вас ограничится скорость и только на пол часа. О том как обойти это ограничение скорости я расскажу далее.

{%
	include media-image.html
	url="yota/yota_sharing.png"
	width="675"
	height="626"
	caption="Ограничение на раздачу интернета — Yota"
%}

## Обход ограничения скорости Yota

К нашей радости сейчас это ограничение не сложно обмануть / убрать / отключить :)

Если у вас операционная система **Windows**, тогда вам нужно открыть командную строку (<mark>Выполнить</mark>), ввести в ней `regedit.exe` и следовать по следующему пути: `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Tcpip\Parameters`. Затем нужно нажать правой кнопкой на пустом пространстве (в правом окне) и выбрать `NEW > QWORD (64-bit) Value`. Назовите её `DefaultTTL`, после двойным щелчком мыши по ней в правой части переключите радиокнопку на `Decimal (Десятичное)` и введите значение `65`.

{%
	include media-image.html
	url="yota/regedit.png"
	width="400"
	height="241"
	caption="Командная строка в Windows — yota без ограничения скорости"
%}

Для **Mac OS** все куда проще :-) Нужно открыть <mark>Терминал</mark> и вставить туда следующую команду: `sudo sysctl -w net.inet.ip.ttl=65`

Теперь остается только перезагрузить компьютер и желательно подождать пол часа перед тем, как попытаться снова раздать интернет. После этого у вас снимется ограничение на раздачу интернета.

> P.S. торренты, к сожалению, будут загружаться с ограниченной скоростью. Как решить эту проблему не покупая VPN или его аналоги, я не знаю.

Ваши вопросы, рекомендации и советы пишите в комментариях.

**UPD**. Yota обновляет свои фильтры, и теперь раздавать интеренет с телефона сложнее. Подробнее об этом читайте на <a href="http://4pda.ru/forum/index.php?showtopic=596728" rel="nofollow">форуме 4pda</a>.
