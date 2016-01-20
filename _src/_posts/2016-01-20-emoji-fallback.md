---
layout: post
title: Фоллбэчим Emoji
categories: front-end
description: 123
tags: [emoji, twitter, fallback]

image: emoji/emoji.jpg
imageWidth: 1860
imageHeight: 830
imageCaption: Emoji
---

Emoji набирают популярность. В блоге я тоже использовал их несколько раз, но получил отзыв о том, что они не везде показываются. На тот момент я прикрутил к сайту [Twemoji](https://github.com/twitter/twemoji){:rel='nofollow'}, но мне не нравилось что они заменяют стандартные на iOS и OS X.

<!-- more -->

У пользователя два варианта развития событий с эмодзи:
1. Не поддерживаются вообще (показываются квадратики)
2. Поддерживаются, но не красивые (стандартные в некоторых ОС)

Мы можем решить эту проблему, определив поддержку эмодзи и ОС пользователя.

## Определяем поддержку эмодзи

```js
var emojiSupported = (function() {
  var node = document.createElement('canvas');
  if (!node.getContext || !node.getContext('2d') ||
      typeof node.getContext('2d').fillText !== 'function')
    return false;
  var ctx = node.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\ude03', 0, 0);
  return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
})();
```

## Определяем Apple девайсы

```js
var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
```

После того, как мы определили на чем сидит пользователь и поддерживаются у него эмодзи мы можем сможем решить эту проблему с помощью Twemoji.

```js
if (!emojiSupported || !isMacLike) {
	// загрузить Twemoji и обработать документ
	// twemoji.parse(document.body)
}
```

Этим способом emoji работают в этом блоге 👍
Если у вас не отображается блок с emoji, напишите об этом мне на [почту](mailto:ymatuhin@yandex.ru) и укажите ваш браузер и операционную систему.

> 😀 😬 😁 😂 😃 😄 😅 😆 😇 😉 😊 🙂 🙃 😋 😌 😍 😘 😗 😙 😚 😜 😝 😛 🤑 🤓 😎 🤗 😏 😶 😐 😑 😒 🙄 🤔 😳 😞 😟 😠 😡 😔 😕 🙁 😣 😖 😫 😩 😤 😮 😱 😨 😰 😯 😦 😧 😢 😥 😪 😓 😭 😵 😲 🤐 😷 🤒 🤕 😴 💤 💩 😈 👿 👹 👺 💀 👻 👽 🤖 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙌 👏 👋
