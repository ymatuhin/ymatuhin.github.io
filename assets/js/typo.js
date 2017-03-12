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
	setTimeout(function () {
		ct.className += ' typed';
	}, 250);

	function addSpans(el, i) {
		if (el[text] == '' || el[text].trim() == '') return;
		if (el.innerHTML.indexOf('«') != -1)
		if (el.innerHTML.indexOf('(') != -1)

		if (el.innerHTML[0] == '«') el.innerHTML = '<span class="l_elka">«</span>' + el.innerHTML.slice(1);
		if (el.innerHTML[0] == '(') el.innerHTML = '<span class="l_skobka">(</span>' + el.innerHTML.slice(1);

		if (el[text].indexOf('«') != -1)
			el.innerHTML = el.innerHTML.replace(/ «/g, '<span class="elka"> </span><span class="l_elka">«</span>')
		if (el[text].indexOf('(') != -1)
			el.innerHTML = el.innerHTML.replace(/ \(/g, '<span class="skobka"> </span><span class="l_skobka">(</span>')
	};
}

typo();


(function () {

	var isAvailible = function (params) {
		var today = new Date();
		var day = today.getDay();
		var user_offset = today.getTimezoneOffset() / 60 * -1;
		var your_offset = +params.offset || 3;
		var diff_offset = your_offset - user_offset;

		var minutes_now = today.getHours() * 60 + today.getMinutes() + diff_offset * 60;

		if (!params.weekends && (day == 6 || day == 0)) return false;
		if (!params.weekdays && (day > 0 || day < 6)) return false;

		if (day > 0 && day < 6) {
			var from = params.weekdays.from.split(':')[0] * 60 + +params.weekdays.from.split(':')[1];
			var to = params.weekdays.to.split(':')[0] * 60 + +params.weekdays.to.split(':')[1];

			if (minutes_now > from && minutes_now < to) return true;
		} else {
			var from = params.weekends.from.split(':')[0] * 60 + +params.weekends.from.split(':')[1];
			var to = params.weekends.to.split(':')[0] * 60 + +params.weekends.to.split(':')[1];

			if (minutes_now > from && minutes_now < to) return true;
		}
		return false;
	};

})();
