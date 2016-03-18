(function () {
  var body = document.getElementsByTagName('body')[0];

  document.addEventListener("touchstart", clickAndTouch, false);
  document.addEventListener("click", clickAndTouch, false);
  window.onbeforeunload = function () { body.style.opacity = 0 };
  window.onpageshow = function(event) {
    body.style.opacity = 1;
    // if (event.persisted) window.location.reload();
  };


  function clickAndTouch (e) {
      var href = e.target.href;
      if (!href || e.metaKey) return true;
      if (href.indexOf('mailto') >= 0) return true;

      body.style.opacity = 0;
      e.preventDefault();
      setTimeout(function () { location.href = href }, 150);
  }
})();
