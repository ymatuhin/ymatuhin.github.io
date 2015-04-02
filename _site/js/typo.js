define(function () {
	function typo (sel) {
		sel = sel || 'p, ol, ul, blockquote, h1, h2, h3, h4';

		if (document.querySelector('.slaquo, .sbrace') !== null) return;

		function forEachElement(selector, fn) {
			var elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++) fn(elements[i], i);
		}

		forEachElement(sel, function(el, i){
			el.innerHTML = el.innerHTML.replace(/«/g, '<span class="slaquo"> </span> <span class="hlaquo"> «</span>')
			el.innerHTML = el.innerHTML.replace(/\(/g, '<span class="sbrace"> </span> <span class="hbrace"> (</span>')
		});
	}

	return {
		go: typo
	}
});