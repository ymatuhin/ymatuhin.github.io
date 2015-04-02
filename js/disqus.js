define(function () {
	var inited = false;

	function init () {
		if (!document.getElementById('disqus_thread') || inited) return;
		inited = true;

		var sn = 'ymatuhin';

		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//' + sn + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	}

	function reload () {
		if (!inited) init();

		if (!document.getElementById('disqus_thread') || !DISQUS)
			return

		DISQUS.reset({
			reload: true,
			config: function () {
				this.page.identifier = location.pathname;
				this.page.url = location.href;
			}
		});
	}

	return {
		init: init,
		reload: reload
	}
});