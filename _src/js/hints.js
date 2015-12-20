function add_hint(type, url) {
	if (!type || !url) return;

	var el = document.createElement("link");
	el.setAttribute("rel", type);
	el.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(el);
};

document.addEventListener("mousemove", function (e) {
	if (!e.target.href ||
		e.target.href.indexOf(location.host) == -1 ||
		e.target.hintAdded) return;

	add_hint('prerender', e.target.href);
	e.target.hintAdded =  true;
});
