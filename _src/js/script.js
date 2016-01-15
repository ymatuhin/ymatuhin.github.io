window.loadFile=function(){var g=document.getElementsByTagName("link"),h=document.getElementsByTagName("script"),k=document.getElementsByTagName("head")[0],d={a:!0,b:!0};return function(c,f){var b=c.slice(c.lastIndexOf(".")+1),a;if(a=b){d[b]=!0;a="js"==b?h:g;for(var e=0;e<a.length;e++)a[e].href==c&&(d[b]=!1);a=d[b]}a&&(a=document.createElement("css"==b?"link":"script"),f&&(a.onload=f),"css"==b&&(a.rel="stylesheet"),"css"==b&&(a.href=c),"js"==b&&(a.src=c),"js"==b&&(a.async=!0),k.appendChild(a))}}();
window.add_hint=function(b,c){if(b&&c){var a=document.createElement("link");a.setAttribute("rel",b);a.setAttribute("href",c);document.getElementsByTagName("head")[0].appendChild(a)}};

var resources = {
	'ol,ul': 'list.css',
	'h1, h2, h3, h4, h5, h6': 'heading.css',
	'figure': 'figure.css',
	'img': 'image.css',
	'code, pre': 'code.css',
	'.menu': 'menu.css',
	'.highlighter-rouge': 'syntax.css',
	'.related': 'related.css',

	'.likely': ['likely.css', 'likely.js'],
	'.comments': 'https://ymatuhin.disqus.com/embed.js',
	'.elka, .lapka, .skobka': ['float-typo.css', 'typo.js'],
	'html': ['/js/hints.js'],
}

for (res in resources) {
	var el = document.querySelector(res);
	if (!el) add_hint('prerender', resources[res]);
	else loadFile(resources[res]);
}

document.addEventListener("mousemove", function (e) {
	if (!e.target.href ||
		e.target.href.indexOf(location.host) == -1 ||
		e.target.hintAdded) return;

	add_hint('prerender', e.target.href);
	e.target.hintAdded =  true;
});

window.addEventListener("load", function () {
	loadFile('//www.google-analytics.com/analytics.js', function () {
		ga('create', 'UA-20899801-7', 'auto');
		ga('send', 'pageview');
	});
});
