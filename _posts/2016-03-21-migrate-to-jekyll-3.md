---
layout: post
title: Обновляемся до Jekyll v3.x
categories: front-end
description: Как обовиться до новой версии Jekyll избежав багов при переходе.
tags: [jekyll, генератор статических сайтов, github, обновление, миграция, markdown, kramdown, rouge, pigments]

image:
  path: /assets/img/jekyll/jekyll-logo.png
  caption: Логотип Jekyll
  width: 960
  height: 480
---

Релиз третьей версии генератора статических сайтов Jekyll прошел 27 октября 2015 года. А 1 февраля 2016 года GitHub Pages [официально поддерживают][1]{:rel='nofollow'} Jekyll 3. В тот момент я захотел перевести блог на новую версию и прикрутить к нему Gulp.

{% include media-post-image.html %}

В тот момент я много работал. А освободился только пару дней назад и решил таки обновить у себя Jekyll. Что из этого вышло и стоит ли обновляться я расскажу в этой статье.



Как обновиться описано на официальном сайте, при обновлении я руководствовался статьей «[Upgrading from 2.x to 3.x][2]{:rel='nofollow'}» и немножно Stack Overflow.

С первого февраля GitHub Pages поддерживает Jekyll 3. Для markdown движка теперь используется только kramdown, а для подстветки синтаксиса — rouge. Я этому рад, поскольку стандартных возможностей Jekyll markdown мне не хватало, а подстветка синтаксиса rouge короче при написании статей.

Для сравнения если раньше, чтобы подстветить кусочек руби кода мы писали:

<pre>
{% raw %}{% highlight ruby %}
(z ||= []) << 'test'
{% endhighlight %}{% endraw %}
</pre>

теперь это делается так:

<pre>
```ruby
(z ||= []) << 'test'
```
</pre>

Отдельный ад для меня была сборка проекта. Гитхаб не мог адекватно собрать мой сайт, поэтому приходилось мудрить с командной строкой. Делать папку `_src`, билдить сайт в `_site`, переносить все файлы в корень папки и отчищать все в корне кроме папки `_src`. Я даже своей сборкой удалил половину другого проекта запустив её не в той папке 😀

Но теперь это в прошлом, гитхаб помимо того что понимает и собирает, теперь делает это быстрее.

## Баги/особенности

1.  Сбились отступы текста в markdown. Вылечилось добавлением строчки `hard_wrap: true` в конфиг:

    ```
    kramdown:
      input: GFM
      hard_wrap: true
      syntax_highlighter: rouge
    ```

2.  Перестали открываться статьи. Помогло добавление последнего `/` в конфиге:

    ```
    permalink: /:categories/:title/
    ```

3.  Сломались переменные в шаблонах. Если написать в `post.html` такой код, то раньше в `page.html` у нас был доступ к переменной `is_post`. Сейчас — нету.

    ```
    ---
    layout: page
    is_post: true
    ---
    ```

    Теперь, чтобы определить, что текущая страница это пост, я пишу `{% raw %}{% if page.categories %}{% endraw %}`.

4.  Если вы используете `jekyll-redirect-from`, то чтобы гитхаб при сборке его использовал укажите это в конфиге:

    ```
    gems:
      - jekyll-redirect-from
    ```

5.  Ваша рсс обновится и разошлется подписчикам еще раз. Возможно это связано с изменениями, которые вносил я и не свзязанно с новой версией.

6.  По умолчанию при запуске `jekyll serve` и `jekyll build` не показываются посты с датой в будущем. Чтобы их увидить — добавьте флаг `--future`.

Удачного вам обновления.

[1]: https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0
[2]: https://jekyllrb.com/docs/upgrading/2-to-3/
