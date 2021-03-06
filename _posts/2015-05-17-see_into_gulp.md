---
layout: post
title: Разбираемся со сборкой front end на Gulp
description: >
  Обзор основных возможностей новой системы для сборки проектов — Gulp, а так-же с изучаем как работают его основные функциии.
categories: front-end
tags: >
  gulp watch task src dist сборка front end клиент pipe
image:
  path: /assets/img/gulp/logo.png
  width: 400
  height: 200
  alt: Gulp — системы сборки фронтенда
image_link: http://gulpjs.com
---

{% include media-post-image.html %}

В последнее время **Gulp** набирает большую популярность, и понятно почему. Он быстрее, красивее и проще чем **Grunt**. Мне приходилось часто с ним работать, но я всегда брал готовые решения и не до конца понимал как же он все это делает. На этих выходных я решил разобрать и закрыть эту небольшую проблему. Об этом и поговорим сегодня.

## Что такое Gulp?

Gulp — это инструмент сборки front-a. Он позволяет автоматизировать повторяющиеся задачи (сборка и минификация CSS- и JS-файлов, запуск тестов, перезагрузка браузера и другие). Тем самым Gulp ускоряет и оптимизирует процесс веб-разработки.

## Установка Gulp
Установить Gulp достаточно легко. Если у вас что-то не получится, пишите в комментариях или загуглите вашу проблему. Итак для установки нужно сделать 3 шага:

* Установить Gulp глобально
* Установить Gulp как `devDependencies` (зависимости для разработки)
* Создать файл `gulpfile.js`

Первый шаг — устанавливаем глобально Gulp. Открываем терминал и пишем:

~~~bash
npm install --global gulp
~~~

После этого вам нужно установить Gulp как `devDependencies` для вашего проекта. Убедитесь в том, что у вас есть файл `package.json`. Если его нет, то создайте его написав в консоль `npm init`. Теперь можно установить Gulp как `devDependencies`:

~~~bash
npm install --save-dev gulp
~~~

И наконец, вам нужно создать `gulpfile.js` в корне вашего проекта, который будет содержать ваши задачи (tasks). В качестве промежуточного шага, мы установим плагин `gulp-util`. Чтобы показать как устанавливаются плагины:

~~~bash
npm install --save-dev gulp-util
~~~

Теперь настало время написать нашу первую задачку. Открываем только что созданный файл `gulpfile.js` и пишем в него следующее:

~~~js
/* File: gulpfile.js */

// собираем все наши плагины
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// создаем задачку, которая будет выполняться по умолчанию
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});
~~~

И теперь нам остается запустить gulp в терминале и мы увидим нечто похожее на это:

~~~bash
> gulp
[12:32:08] Using gulpfile ~/Projects/gulp-scotch-io/gulpfile.js
[12:32:08] Starting 'default'...
[12:32:08] Gulp is running!
[12:32:08] Finished 'default' after 1 ms
~~~

## Обзор
Сам по себе Gulp очень скуден на возможности. Но все, что вам нужно вынесено в отдельные плагины. Они совместно с Gulp творят чудеса.

Api у gulp очень маленькое, и содержит всего 4 функции высшего порядка:

* `gulp.task`
* `gulp.src`
* `gulp.dest`
* `gulp.watch`

`gulp.task` определяет наши задачи. В качестве аргументов принимает название, зависимости (массив) и функцию (основные действия). Зависимостей может и не быть:

~~~js
gulp.task('mytask', function() {
  //сделать что-то
});

gulp.task('dependenttask', ['mytask'], function() {
  //сделать что-то после того, как 'mytask' будет выполнен
});
~~~

`gulp.src` указывает на файлы, которые мы хотим использовать. Он использует `.pipe` доступа к файлам через плагины.

`gulp.dest` указывает на папку, в которую мы хотим сохранить измененные файлы.

`gulp.src` и `gulp.dest` используется для простой копии файлов:

~~~js
gulp.task('copyHtml', function() {
  // скопировать все html файлы из source/ в public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});
~~~

В gulp встроена система реагирования на изменения файлов (`gulp.watch`). Вы можете использовать эту задачу для запуска других необходимых вам задач при изменении файлов.

~~~js
gulp.watch('source/**/*.html', ['copyHtml']);
~~~

Этот пример будет выполнять задачу `copyHtml` когда любой html файл в папке source изменится.

В следующей статье мы разберемся подробнее о задачах, синхронность и асинхронностью и напишем что-нибудь полезное.
