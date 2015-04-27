define(["dom-classes"], function(cls) {
    var darkSW;

    function init() {
        darkSW = document.querySelector('.dark-mode-switcher input');
        darkSW.onchange = setCheckedIfNeed;
		update();
    }

    function setCheckedIfNeed() {
        localStorage.darkMode = darkSW.checked;

        if (darkSW.checked)
            cls.add(document.documentElement, 'dark-mode');
        else
            cls.remove(document.documentElement, 'dark-mode');
    }

    function update() {
        var local = localStorage.darkMode == 'true' || false;
        darkSW.checked = local;
        setCheckedIfNeed();
    }

    return {
        init: init,
        update: update
    };
});
