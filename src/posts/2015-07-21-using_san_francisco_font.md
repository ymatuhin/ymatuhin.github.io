---
layout: post
title: Используем системный шрифт San Francisco на Mac OS
description: >-
  Вместе с выпуском Apple Watch, компания представила новый шрифт San Francisco, который теперь
  будет использоваться во всей экосистеме Apple.
tags:
  - development
  - frontend
  - css
  - fonts
  - macos
image:
  path: san_francisco/san_francisco.jpg
  alt: San Francisco
redirects:
  - /front-end/using_san_francisco_font/
---

{% mediaImage image.path, image.alt, "eager" %}

Вместе с выпуском Apple Watch, компания представила новый шрифт <em>San Francisco</em>, который теперь будет
использоваться во всей экосистеме Apple. Уже сейчас можно посмотреть на этот шрифт в публичных
бетах [OSX и El Capitan](/blog/review_ios9_and_osx_el_capitan/).

Казалось бы, теперь при просмотре стандартной веб-странички на устройствах Apple будет установлен этот шрифт. Но
это не так. Более того, нам даже не поможет следующий код:

```css
body {
  font-family: "San Francisco", "Helvetica Neue", "Lucida Grande";
}
```

К сожалению, в свежих версиях El Capitan шрифт San Francisco не установлен. Однако это же системный шрифт, как такое
возможно?

{% mediaImage "san_francisco/all_fonts.png", "Ищем шрифт San Francisco в El Capitan" %}

Apple сделал свой новый шрифт приватным в системе, но это не значит что мы не можем до него добраться 😉

## Подключаем San Francisco

Чтобы добраться до системного шрифта, в некоторых браузерах есть значение шрифта `-apple-system`. В будущем можно будет
пользоваться только им, но не сейчас. Чтобы все работало в хроме и остальных браузерах на нужен следующий код:

```css
body {
  font-family: system, -apple-system, BlinkMacSystemFont, ".SFNSDisplay-Regular", "Helvetica Neue", "Lucida Grande";
}
```

“.SFNSDisplay-Regular” это приватное имя для San Francisco (regular) в текущих бета релизах (это может поменяться в
любое время!).

Значение свойства “system” для семейства шрифта сейчас не существует, но возможно в ближайшем будущем, разработчики
браузеров добавят его. Думаю, это было бы полезно для всех платформ. На Android — Roboto или Noto. Для Windows
пользователь может сам выбирать шрифт, а мы, пока, не можем знать какой шрифт у него стоит по умолчанию.

Хотя меня не очень радует перспектива использовать шрифт Roboto или какой-то другой, отличный от яблочных. Поэтому я бы
убрал `system`.

Если у вас есть El Capitan или iOS 9, вы можете посмотреть на мой блог, на котором уже стоит San Francisco. Также я
подготовил небольшую [демонстрацию](https://codepen.io/ymatuhin/pen/MoLWLv?editors=1100#0).

Подсмотрено у [Craig Hockenberry](http://furbo.org/2015/07/09/i-left-my-system-fonts-in-san-francisco/).

> Обновление от **6 февраля, 2016**.
> Хром теперь поддерживает свое значение `BlinkMacSystemFont`, аналогичное `-apple-system`.
