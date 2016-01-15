function typo() {
	var ct = document.querySelector('.content');
	var sel = 'p';

	if (!ct || ct.querySelector('.elka, .lapka, .skobka') !== null) return;

	function forEachElement(selector, fn) {
		var elements = ct.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) fn(elements[i], i);
	}

	forEachElement(sel, function(el, i) {
		var text = ('innerText' in el) ? 'innerText' : 'textContent';
		if (el[text] == '') return;

		el.innerHTML = el.innerHTML.replace(/ «/g, '<span class="elka"> </span><span class="l_elka">«</span>')
		el.innerHTML = el.innerHTML.replace(/ “/g, '<span class="lapka"> </span><span class="l_lapka">“</span>')
		el.innerHTML = el.innerHTML.replace(/ \(/g, '<span class="skobka"> </span><span class="l_skobka">(</span>')
	});
}

typo();
