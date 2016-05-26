(function () {
	var dateMod = document.querySelector('[itemprop="dateModified"]');
	var datePub = document.querySelector('[itemprop="datePublished"]');

	console.log('1', dateMod, datePub);
	if (!dateMod || !datePub) return;
	console.log('2');

	var mod  = new Date(dateMod.getAttribute('content'));
	var pub  = new Date(datePub.getAttribute('datetime'));

	var days = Math.floor((new Date() - mod)/(1000*60*60*24));
	var updText = document.querySelector('.js-updated');

	function declOfNum(number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}

	if (mod > pub) {
		var _txt = updText.innerText || updText.textContent;
		var shownText = '';

		if (days == 0) {
			shownText = 'сегодня';
		} else if (days == 1) {
			shownText = 'вчера';
		} else if (days > 0 && days < 30) {
			shownText = days + ' ' + declOfNum(days, ['день', 'дня', 'дней']) + ' назад';
		} else if (days > 30 && days < 365) {
			shownText = Math.floor(days/30) + ' ' + declOfNum(Math.floor(days/30), ['месяц', 'месяца', 'месяцев']) + ' назад';
		} else if (days > 365) {
			shownText = Math.floor(days/365) + ' ' + declOfNum(Math.floor(days/365), ['год', 'года', 'лет']) + ' назад';
		}

		console.log('shownText', shownText);
		if (days >= 0) {
			updText.style.display = '';
			updText.innerHTML = _txt + ' <em>' + shownText + '</em>';
		}
	}
})();
