---
layout: post
title: Лайфхак. Блокировка входящих без дисконектов на iPhone
categories: [blog]
description:
tags: [лайфхак, блокировка, входящие, звонки, iphone, yota, включить]
social_image: phones/phone.jpeg
---

{%
	include media-image.html
	url="phones/phone.jpeg"
	width="1107"
	ratio="3/2"
	space_after=""

	preload="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAIAAADkeZOuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdVJREFUeNoUzz1oE1EAwPH37r3LnenlklwTjdbE1ho/oCoiinSTDi2CuggOiohGB90d3USwiLPU0UEdBAcRRJCKFLK0iosajSbXNL00l0svua/33r1nHP/wW/7w2esXckJWEgksI9tq6tqO2VNzpZ0TAICfjv3k5TJS8v1elwbM7jiYU8JEDFhsWh0hkduXbwAgj+iHryuLS+/d6EBabbZq38Ke5bZWcbe9RUkU+cPqytq2fvBuRU4CcG/p3eKdiqrt2jdRaHRqlBJ/6MRsgI7OzPS7Vrdl1n8111brGyTr07GnDx/ZG1VEnV7ndxC5hEU0FgyosHLzmjfoe27fbG02TNv3YC6/10hzDujA9YIgZDEfhQCQc4Emi/mYCTVp6JlcNqOpuhIQxxhTSqUSBIz4AyiYJBjkERYRPjl3K5XOp/SMjOB6uzZ/8ayWTN1/8Pjzq+fl/cUz5SMQ0KHn+3402sPl4wuSJEDsY4nRRv3Tm7dXL81fv3KuZ373t7FWmNpTSCdRRINhSGI8cCyEJQQIF9Gh6anq8scLC+dzemL68LEt5mzWv7T/oOJuYzyr/dechZADDmIehwCGp2dPjOtw/e8PBeLJgiEEhxAAJBPKhRD/BBgAZ3r35YgfxvIAAAAASUVORK5CYII="
%}

У меня мобильный оператор YOTA с безлимитным 4G интернетом, который я раздаю себе на Mac. Я писал об этом в статье «[Как снять ограничения Yota на раздачу интернета][1]». Но в этом способе одна проблема — если мне звонят, то интернет обрывается. Неприятно, когда это происходит во время работы или звонков по скайпу.

<!-- more -->

Если включить «Режим полета», то вместе со связью пропадет и интернет 😔
Но есть решение и для этой проблемы — **режим переадресации**. Чтобы это сработало, укажите несуществующий или недоступный номер.

{% include media-image.html url="phones/forward.jpg" alt="" caption="Настройка переадресации на iPhone" ratio="4/3" color="f2eded" width="1280" height="960" %}

У меня это номер старой симки мегафон модема.

[1]: /blog/how_to_share_yota_mobile_internet/
