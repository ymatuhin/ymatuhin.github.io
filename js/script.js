window.loadFile=function(){var a=document.getElementsByTagName("link"),e=document.getElementsByTagName("script"),k=document.getElementsByTagName("head")[0],b={b:!0,c:!0};return function(l,n){var d=l.slice(l.lastIndexOf(".")+1),c;if(c=d){b[d]=!0;c="js"==d?e:a;for(var m=0;m<c.length;m++)c[m].href==l&&(b[d]=!1);c=b[d]}c&&(c=document.createElement("css"==d?"link":"script"),n&&(c.onload=n),"css"==d&&(c.rel="stylesheet"),"css"==d&&(c.href=l),"js"==d&&(c.src=l),"js"==d&&(c.async=!0),k.appendChild(c))}}();
window.preloadUrl=function(){var a=document.getElementsByTagName("link");return function(e,k){var b;if(b=k){a:{for(b=0;b<a.length;b++)if(arr[b].href==k&&"prerender"==arr[b].rel){b=!1;break a}b=!0}b=!b}b&&(b=document.createElement("link"),b.setAttribute("rel","prerender"),b.setAttribute("href",k),document.getElementsByTagName("head")[0].appendChild(b))}};

k()}a[g](e+"DOMContentLoaded",d,!1);a[g](e+"readystatechange",d,!1);b[g](e+"load",d,!1)}};

var resources = {
	'html, body'            : '/css/document.css',
	'a'                     : '/css/links.css',
	'.menu, .menu_page'     : '/css/menu.css',
	'h1, h2, h3, h4, h5, h6': '/css/heading.css',

	'.content'              : '/css/content.css',
	'.content_index'        : '/css/content_index.css',

	'img, iframe'           : '/css/media.css',
	'time'                  : '/css/time.css',
	'figure'                : '/css/figure.css',
	'ol,ul'                 : '/css/lists.css',
	'code, pre'             : '/css/code.css',
	'blockquote'            : '/css/blockquote.css',
	'mark'                  : '/css/mark.css',
	'hr'                    : '/css/hr.css',
	'table'                 : '/css/tables.css',

	'.profile'              : '/css/profile.css',
	'.projects'             : '/css/projects.css',
	'.highlighter-rouge'    : '/css/syntax.css',
	'.related'              : '/css/related.css',

	'.footer'               : '/css/footer.css',
	'.search'               : '/css/search.css',
	'.visuallyhidden'       : '/css/visuallyhidden.css',

	'.comments'             : 'https://ymatuhin.disqus.com/embed.js',
	'html'                  : ['/js/hints.js', '/js/typo.js', '/css/lettering.css'],
	'.likely'               : ['/css/likely.css', '/js/likely.js'],
}

function startLoading () {
	for (res in resources) {
		var _res = resources[res];
		var el = document.querySelector(res);
		if (!el) {
			preloadUrl(_res);
		}
		else {
			if (typeof _res == 'string') loadFile(_res);
			else if (_res && _res.length >= 1) {
				for (var i = 0; i < _res.length; i++) loadFile(_res[i]);
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	startLoading();

	document.addEventListener("mousemove", function (e) {
		if (!e.target.href || e.target.href.indexOf(location.host) == -1) return;
		preloadUrl(e.target.href);
	});

	document.addEventListener("mousedown", function (e) {
		if (!e.target.href || e.metaKey) return;
		document.getElementsByTagName('body')[0].style.opacity = 0;
	});

	loadFile('//www.google-analytics.com/analytics.js', function () {
		ga('create', 'UA-20899801-7', 'auto');
		ga('send', 'pageview');
	});
});
