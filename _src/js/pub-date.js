var mod = document.querySelector('meta[itemprop="dateModified"]').getAttribute('content');
var pub = document.querySelector('time[itemprop="datePublished"]').getAttribute('datetime');
var today = new Date();
var updText = document.querySelector('.js-updated');

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

if (mod != pub) {
	var _txt = updText.innerText;
	var _mod = new Date(mod);
	var days = Math.round((today - _mod)/(1000*60*60*24));
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

	if (days >= 0) {
		updText.style.display = '';
		updText.innerHTML = _txt + ' <em>' + shownText + '</em>';
	}
}
