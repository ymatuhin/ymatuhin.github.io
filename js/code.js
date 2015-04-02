var _comments = {}, _typo = {}, _metrica = {};

_typo.selectors = 'p, ol, ul, blockquote, h1, h2, h3, h4'
_typo.go = function () {
	if (document.querySelector('.slaquo, .sbrace') !== null) return;

	function forEachElement(selector, fn) {
		var elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) fn(elements[i], i);
	}

	forEachElement(this.selectors, function(el, i){
		el.innerHTML = el.innerHTML.replace(/«/g, '<span class="slaquo"> </span> <span class="hlaquo"> «</span>')
		el.innerHTML = el.innerHTML.replace(/\(/g, '<span class="sbrace"> </span> <span class="hbrace"> (</span>')
	});
}

_comments.init = function () {
	var sn = 'ymatuhin';

	(function() {
		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = '//' + sn + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
}
_comments.reload = function () {
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

_metrica.init = function () {
	try { window.yaCounter28017147 = new Ya.Metrika({id:28017147, webvisor:true, clickmap:true}); } catch(e) { }
}
_metrica.reload = function () {
	try { yaCounter28017147.hit(location.href) } catch(e) { }
}

// Dom content load
InstantClick.init();
InstantClick.on('change', onAjaxLoadFn);

_typo.go();

// Window load
window.onload = onFirstLoadFn;
function onFirstLoadFn () {
	_metrica.init();
	_comments.init();
}

function onAjaxLoadFn () {
	_typo.go();
	_metrica.reload()

	setTimeout(_comments.reload, 1000);
}

