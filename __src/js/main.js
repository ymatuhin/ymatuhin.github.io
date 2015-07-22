require(['instantclick.min', 'disqus'], function(ic, disqus) {
	disqus.init();
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);

	function onAjaxLoadFn () {
		// Try reload metrica
		try { window.yaCounter28017147.hit(location.href); } catch(e) { }
		setTimeout(disqus.reload, 1000);
	}
});

require(['yaMetrica'], function(metrica) {
	metrica.init();
});

// require(['cssLoader'], function(cssLoader) {
// 	cssLoader.load('/css/secondary.css');
// });
