loadInstantClick();

function addTypo () {
	if (document.querySelector('.slaquo, .sbrace') !== null) return;

	function forEachElement(selector, fn) {
		var elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) fn(elements[i], i);
	}

	forEachElement('p, ol, ul, blockquote, h1, h2, h3, h4', function(el, i){
		el.innerHTML = el.innerHTML.replace(/«/g, '<span class="slaquo"> </span> <span class="hlaquo"> «</span>')
		el.innerHTML = el.innerHTML.replace(/\(/g, '<span class="sbrace"> </span> <span class="hbrace"> (</span>')
	});
}

function loadInstantClick() {
	InstantClick.init();
	addTypo();

	InstantClick.on('change', onAjaxLoadPage);
}

function onAjaxLoadPage () {
	addTypo()

	if (yaCounter28017147) yaCounter28017147.hit(location.href)

	setTimeout(function () {
		if (!document.getElementById('disqus_thread') || !DISQUS)
			return

		DISQUS.reset({
			reload: true,
			config: function () {
				this.page.identifier = location.pathname;
				this.page.url = location.href;
			}
		});
	}, 500);
}