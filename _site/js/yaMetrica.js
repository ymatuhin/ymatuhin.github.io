define(function () {
	function init () {
		try { window.yaCounter28017147 = new Ya.Metrika({id:28017147, webvisor:true, clickmap:true}); } catch(e) { }
	}

	function reload () {
		try { yaCounter28017147.hit(location.href) } catch(e) { }
	}

	return {
		init: init,
		reload: reload
	}
});