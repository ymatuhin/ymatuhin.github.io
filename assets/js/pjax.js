(function () {
  var body = document.getElementsByTagName('body')[0];

  document.addEventListener("touchstart", clickAndTouch, false);
  document.addEventListener("click", clickAndTouch, false);

  window.onbeforeunload = function () { body.style.opacity = 0 };

  function clickAndTouch (e) {
      var href = e.target.href;
      if (!href || e.metaKey) return true;

      e.preventDefault();
      setTimeout(function () { location.href = href }, 150);
  }
})();
