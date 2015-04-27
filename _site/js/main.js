require(['instantclick.min', 'typo', 'disqus', 'share42', 'dom-classes'], function(ic, typo, disqus, share42, cls) {
	InstantClick.init();
	InstantClick.on('change', onAjaxLoadFn);
	InstantClick.on('wait', function () {
		cls.add(document.documentElement, 'wait');
	});

	disqus.init();
	onPageReady();

	function onAjaxLoadFn () {
		cls.add(document.documentElement, 'wait');
		setTimeout(function () {
			cls.remove(document.documentElement, 'wait');
		}, 500);

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


require(['instantclick.min', 'dark-mode'], function(ic, dark) {
	dark.init();
	InstantClick.on('change', function () {
		dark.init();
	});
});

require(['yaMetrica'], function(metrica) {
	metrica.init();
});

require(['cssLoader'], function(cssLoader) {
	cssLoader.load('/css/secondary.css');
});
