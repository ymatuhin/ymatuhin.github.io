function typo() {
	var ct = document.querySelector('body');
	var sel = 'p, h1, h2, h3, h4, h5, h6, a';
	var text = ('innerText' in ct) ? 'innerText' : 'textContent';

	if (!ct || ct.querySelector('.l_elka, .l_skobka') !== null) return;

	function forEachElement(selector, where, fn) {
		var elements = where.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) fn(elements[i], i);
	}

	forEachElement(sel, ct, addSpans);
	ct.className += ' typed';

	function addSpans(el, i) {
		console.log('el', el);
		if (el[text] == '' || el[text].trim() == '') return;

		if (el.innerHTML[0] == '«') el.innerHTML = '<span class="l_elka">«</span>' + el.innerHTML.slice(1);
		if (el.innerHTML[0] == '(') el.innerHTML = '<span class="l_skobka">(</span>' + el.innerHTML.slice(1);

		el.innerHTML = el.innerHTML.replace(/ «/g, '<span class="elka"> </span><span class="l_elka">«</span>')
		el.innerHTML = el.innerHTML.replace(/ \(/g, '<span class="skobka"> </span><span class="l_skobka">(</span>')
	};
}

typo();
