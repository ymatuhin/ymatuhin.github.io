var preloadUrl = (function () {
	var links = document.getElementsByTagName('link');
	function hasThisLink(url) {
		for (var i = 0; i < links.length; i++) {
			if (links[i].href == url && links[i].rel == 'prerender') return true;
		}
		return false;
	}

	return function (url) {
		if (!url || hasThisLink(url)) return;

		var el = document.createElement("link");
		el.setAttribute("rel", 'prerender');
		el.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(el);
	}
})();

document.addEventListener("mousemove", function (e) {
	if (!e.target.href ||
		e.target.href.indexOf(location.host) == -1) return;

	preloadUrl(e.target.href);
});
