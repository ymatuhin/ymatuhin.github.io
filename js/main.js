require(['instantclick.min', 'typo', 'disqus', 'share42'], function(ic, typo, disqus, share42) {
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);

	disqus.init();
	onPageReady();

	function onAjaxLoadFn () {
		onPageReady();
		// Try reload metrica
		try { window.yaCounter28017147.hit(location.href); } catch(e) { }
		try { window.pluso.refreshCounter(location.href); } catch(e) { }
		setTimeout(disqus.reload, 1000);
	}

	function onPageReady () {
		typo.go();
		share42.init();
	}
});

require(['yaMetrica'], function(metrica) {
	metrica.init();
});

require(['cssLoader'], function(cssLoader) {
	cssLoader.load('/css/secondary.css');
});
