---
layout: post
title: Список статичных HTTP серверов для терминала
categories: front-end
tags: [http, server]
---

Каждая из нижеприведенных команд запускает статичный http сервер в текущей директории. Сервер будет доступен по адресу [http://localhost:8000](http://localhost:8000).

<!-- more -->

## Python 2.x
{% highlight bash %}
python -m SimpleHTTPServer 8000
{% endhighlight %}

## Python 3.x
{% highlight bash %}
python -m http.server 8000
{% endhighlight %}

## Twisted (Python)
{% highlight bash %}
twistd -n web -p 8000 --path .
{% endhighlight %}

или

{% highlight bash %}
python -c 'from twisted.web.server import Site; from twisted.web.static import File; from twisted.internet import reactor; reactor.listenTCP(8000, Site(File("."))); reactor.run()'
{% endhighlight %}

Зависит от [Twisted](http://twistedmatrix.com/trac/wiki/Downloads).

## Ruby
{% highlight bash %}
ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd).start'
{% endhighlight %}

## Ruby 1.9.2+
{% highlight bash %}
ruby -run -ehttpd . -p8000
{% endhighlight %}

### adsf (Ruby)
{% highlight bash %}
gem install adsf   # устанавливаем зависимость
adsf -p 8000
{% endhighlight %}

### Sinatra (Ruby)
{% highlight bash %}
gem install sinatra   # устанавливаем зависимость
ruby -rsinatra -e'set :public_folder, "."; set :port, 8000'
{% endhighlight %}

## Perl
{% highlight bash %}
cpan HTTP::Server::Brick   # устанавливаем зависимость
perl -MHTTP::Server::Brick -e '$s=HTTP::Server::Brick->new(port=>8000); $s->mount("/"=>{path=>"."}); $s->start'
{% endhighlight %}

### Plack (Perl)

{% highlight bash %}
cpan Plack   # устанавливаем зависимость
plackup -MPlack::App::Directory -e 'Plack::App::Directory->new(root=>".");' -p 8000
{% endhighlight %}


### Mojolicious (Perl)

{% highlight bash %}
cpan Mojolicious::Lite   # устанавливаем зависимость
perl -MMojolicious::Lite -MCwd -e 'app->static->paths->[0]=getcwd; app->start' daemon -l http://*:8000
{% endhighlight %}

### http-server (Node.js)

{% highlight bash %}
npm install -g http-server   # устанавливаем зависимость
http-server -p 8000
{% endhighlight %}

## node-static (Node.js)

{% highlight bash %}
npm install -g node-static   # устанавливаем зависимость
static -p 8000
{% endhighlight %}

## PHP (>= 5.4)

{% highlight bash %}
php -S 127.0.0.1:8000
{% endhighlight %}


## Erlang

{% highlight bash %}
erl -s inets -eval 'inets:start(httpd,[{server_name,"NAME"},{document_root, "."},{server_root, "."},{port, 8000},{mime_types,[{"html","text/html"},{"htm","text/html"},{"js","text/javascript"},{"css","text/css"},{"gif","image/gif"},{"jpg","image/jpeg"},{"jpeg","image/jpeg"},{"png","image/png"}]}]).'
{% endhighlight %}


## busybox httpd

{% highlight bash %}
busybox httpd -f -p 8000
{% endhighlight %}


## webfs

{% highlight bash %}
webfsd -F -p 8000
{% endhighlight %}

Зависит от [webfs](http://linux.bytesex.org/misc/webfs.html).

## IIS Express

{% highlight bash %}
C:\> "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:C:\MyWeb /port:8000
{% endhighlight %}

Зависит от [IIS Express](http://www.iis.net/learn/extensions/introduction-to-iis-express/iis-express-overview). Путь `/path` должен быть абсолютным.

### Благодарность
На основании списка Вильяма Боверса (William Bowers) — [web-servers](https://gist.github.com/willurd/5720255).
