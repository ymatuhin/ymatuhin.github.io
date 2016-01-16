window.loadFile=function(){var g=document.getElementsByTagName("link"),h=document.getElementsByTagName("script"),k=document.getElementsByTagName("head")[0],d={a:!0,b:!0};return function(c,f){var b=c.slice(c.lastIndexOf(".")+1),a;if(a=b){d[b]=!0;a="js"==b?h:g;for(var e=0;e<a.length;e++)a[e].href==c&&(d[b]=!1);a=d[b]}a&&(a=document.createElement("css"==b?"link":"script"),f&&(a.onload=f),"css"==b&&(a.rel="stylesheet"),"css"==b&&(a.href=c),"js"==b&&(a.src=c),"js"==b&&(a.async=!0),k.appendChild(a))}}();
window.preloadUrl=function(){var c=document.getElementsByTagName("link");return function(d,b){var a;if(a=b){a:{for(a=0;a<c.length;a++)if(arr[a].href==b&&"prerender"==arr[a].rel){a=!1;break a}a=!0}a=!a}a&&(a=document.createElement("link"),a.setAttribute("rel","prerender"),a.setAttribute("href",b),document.getElementsByTagName("head")[0].appendChild(a))}};
window.domReady=function(b,h){function k(){try{l.doScroll("left")}catch(a){setTimeout(k,50);return}d("poll")}function d(c){if("readystatechange"!=c.type||"complete"==a.readyState)("load"==c.type?b:a)[p](e+c.type,d,!1),!m&&(m=!0)&&h.call(b,c.type||c)}var m=!1,n=!0,a=b.document,l=a.documentElement,f=a.addEventListener,g=f?"addEventListener":"attachEvent",p=f?"removeEventListener":"detachEvent",e=f?"":"on";if("complete"==a.readyState)h.call(b,"lazy");else{if(!f&&l.doScroll){try{n=!b.frameElement}catch(c){}n&&
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

domReady(window, function () {
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
