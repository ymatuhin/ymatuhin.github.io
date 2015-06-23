require(['instantclick.min', 'disqus'], function(ic, disqus) {
	disqus.init();
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);

	removeNoscript();

	function onAjaxLoadFn () {
		removeNoscript();

		// Try reload metrica
		try { window.yaCounter28017147.hit(location.href); } catch(e) { }
		setTimeout(disqus.reload, 1000);
	}

	function removeNoscript() {
		var html = document.getElementsByTagName('body')[0];

		if (html.innerHTML.indexOf('<noscript') >= 0) {
			html.innerHTML = html.innerHTML.replace( /<noscript[\S\s]*?<\/noscript>/ig, '');
		}
	}
});

require(['yaMetrica'], function(metrica) {
	metrica.init();
});

// require(['cssLoader'], function(cssLoader) {
// 	cssLoader.load('/css/secondary.css');
// });
