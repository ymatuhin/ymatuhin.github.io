requirejs.config({
	baseUrl: '/js/',
	paths: { }
});

require(["instantclick.min", "typo", "disqus"], function(ic, typo, disqus) {
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);

	typo.go();
	disqus.init();

	function onAjaxLoadFn () {
		typo.go();

		// Try reload metrica
		try { yaCounter28017147.hit(location.href) } catch(e) { }
		setTimeout(disqus.reload, 1000);
	}
});

require(["yaMetrica"], function(metrica) {
	metrica.init();
});

require(["cssLoader"], function(cssLoader) {
	cssLoader.load('/css/secondary.css');
});