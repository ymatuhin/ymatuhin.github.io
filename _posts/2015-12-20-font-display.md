---
layout: post
title: Управляем поведением font-face в CSS
categories: front-end
description: Поведением текста, отображаемого во время загрузки font-face, можно управлять с помощью свойства font-display. Как работает и какие значения поддерживет свойсто font-display читайте в статье.
tags: [web fonts, font, font-display, css]

image:
  path: /assets/img/font-display/font-display.png
  alt: Font display
  width: 762
  height: 658
has_youtube: true
---

{% include media-post-image.html %}

Когда вы загружаете шрифт через `font-face`, браузер решает что отобразить пока шрифт загружается. Браузеры ждут некоторое время, перед тем как решить что делать дальше.

Браузер | Время ожидания | Запасной шрифт | Замена шрифта
|----+----|
Chrome 35+ | 3 секунды | + | +
Opera | 3 секунды | + | +
Firefox | 3 секунды | + | +
Internet Explorer | 0 секунд | + | +
Safari | нет ожидания | - | -



* Chrome и Firefox ждут 3 секунды перед тем, как отобразить текст запасным шрифтом. В дальнейшем, когда шрифт загрузится элементы использующие этот шрифт перерисуются с новым шрифтом. Возможно вы замечали как некоторые страницы "мерцали" при смене шрифта.
* Internet Explorer не ждет трех секунд, а сразу отрисовывает текст: если браузер еще не загрузил шрифт, то используется запасной. После загрузки шрифта элементы перерисуются.
* В Safari нет времени ожидания

Это поведения по умолчанию полезны, но отличаются от браузера к браузеру. Это не подаются никакому контролю со стороны разработчика. К тому-же эти способы не идеальны, поэтому разработчики городят решения этих проблем на JavaScript.

## Временная шкала отображения шрифта

В момент когда браузер находит элемент на странице, в котором используется загружаемый шрифт, стартует таймер загрузки. Таймер проходит через три периода: период блокировки, период замены и период отказа. Они определяют как отобразится элемент, использующий загружаемый шрифт:

* Первый период - блокировка шрифта. Если браузер во время этого периода не загрузил шрифт, то он отрисует **невидимый запасной шрифт** для элементов использующих загружаемый шрифт. Если браузер загрузил шрифт во время этого периода, то он перерисует элементы с загруженным шрифтом.
* Второй период - замена шрифта. Если браузер во время этого периода не загрузил шрифт, то он отрисует **запасной шрифт**. Если браузер загрузил шрифт во время этого периода, то он перерисует элементы с загруженным шрифтом.
* Третий период - период отказа. Если браузер не загрузил шрифт до этого момента, то шрифт помечается **неудачно загруженным**, в результате чего используется запасной шрифт.

При перерисовке **запасным шрифтом** браузер находит первый шрифт, объявленный в `font-family`, который уже готов к использованию, и отрисовать текст им.

При перерисовке **невидимым запасным шрифтом** для элемента, браузер ищет шрифт так же как и при "перерисовке запасным шрифтом". Создает анонимный шрифт с похожими метриками как у выбранного шрифта, но с невидимыми символами, и отрисовывает текст им.

## Контролируем отображение шрифта

Свойство `font-display` определяет как шрифт отобразится, в зависимости от того, когда шрифт загрузят.

Имя | `font-display`
Для | `@font-face`
Значения | auto, block, swap, fallback, optional
По умолчанию | auto

**'auto'**
: Использует поведение браузера по умолчанию. Обычно это поведение 'block'.

**'block'**
: Устанавливает короткий период блокировки (3 секунды) и бесконечный период замены.

    > Если шрифт не загрузился, то браузер отрисовывает невидимый текст, но после загрузки заменяет его как можно раньше. Это поведение не подходит для иконочных шрифтов, ведь если шрифт не загрузится и пройдет 3 секунды, то пользователь увидит квадраты вместо иконок.

**'swap'**
: Устанавливает период блокировки в 0 секунд и бесконечный период замены.

    > Браузер сразу отрисовывает текст безопасным шрифтом и пользователь не видит пустого экрана дожидаясь загрузки шрифта. Но когда шрифт загрузится, он сразу заменится.

**'fallback'**
: Устанавливает очень короткий период блокировки (100 мс или меньше) и короткий период замены (3 секунды).

    > Работает так-же как и swap, но если шрифт не загрузился в течении 3-х секунд, то браузер отрисует текст запасным шрифтом. Подходит для текста предназначенного для вдумчивого чтения. В таком случае шрифт играет второстепенную роль. Если он быстро не загрузился, то не стоит отвлекать пользователя мерцанием от замены шрифта.

**'optional'**
: Устанавливает очень короткий период блокировки (100 мс или меньше) и период замены в 0 секунды.

    > Похоже на 'fallback', но по истечению 3-х секунд, браузер может или прервать загрузку (при медленном интернете) или понизить приоритет загрузки. Когда браузер загрузит шрифт, он все равно продолжит отображать текст запасным шрифтом, но если вы обновите текущую или перейдете на другую страницу, для которой установлено значение 'optional' и используется тот-же шрифт, то браузер отрисует текст загруженным шрифтом.

## Видео пример работы свойства font-display

{% include media-youtube.html
    url="CciEEVHZRgw"
    width="421"
    height="315"
    caption="Пример работы CSS свойства font-display" %}

## Как протестировать

Свойство пока работает только в Chrome Canary. Чтобы посмотреть на его работу нужно:

* Запустить Chrome Canary
* Открыть флаги `chrome://flags`
* Включить "enable-experimental-web-platform-features"
* Перезапустить Canary

## Когда использовать

В Canary это свойство появилось 1 декабря 2015 года, поэтому думаю что в течении 3-6 месяцев оно заработает в стабильной версии. Но уже можно добавить одну строчку CSS кода, чтобы в будущем сайт отображал шрифты выбранным вами способом. Я бы ставил по умолчанию `font-display: swap`.

### Дополнительно

Это свойство позволит визуально ускорить отображение сайтов использующих `font-face`, поэтому я жду когда поддержка этого свойства появится в стабильной версии хрома. Если вы заинтересовались этой темой, то вот ссылоки для дополнительного чтения:

* [Спецификация](https://tabatkins.github.io/specs/css-font-display/){:rel='nofollow'}
* [WebPageText](http://www.webpagetest.org/video/compare.php?tests=151201_PQ_VA6){:rel='nofollow'}
* [Демо](http://output.jsbin.com/nigahi/latest/quiet){:rel='nofollow'}
