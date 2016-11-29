---
layout: post
title: Код. Как удалить дубликаты из массива
categories: front-end
tags: [ советы, код, дубликаты, массив, JavaScript, array, es5, es6 ]
social_image: tips/array_uniq.jpg
social_width: 1440
social_height: 480
social_alt: Убрать дубликаты из массива в JavaScript
---

{% include media-post-image.html %}

## ES5

```js
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos
  })
}
```

## ES6

```js
var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos)
}

// или
const uniqEs6 = (array) => [ ...new Set(array) ]
```

Поддержка транспайлерами и браузерами `Set` — [http://kangax.github.io/compat-table/es6/#test-Set](http://kangax.github.io/compat-table/es6/#test-Set)

А чем пользуетесь вы?
