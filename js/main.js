requirejs.config({
	baseUrl: '/js/',
	paths: { }
});

require(["instantclick.min", "typo", "disqus", "yaMetrica"], function(ic, typo, disqus, metrica) {
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);

	typo.go();
	metrica.init();
	disqus.init();

	function onAjaxLoadFn () {
		typo.go();

		metrica.reload();
		setTimeout(disqus.reload, 1000);
	}
});

require(["cssLoader"], function(cssLoader) {
	cssLoader.load('/css/secondary.css');
});