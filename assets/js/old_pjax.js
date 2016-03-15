(function () {
  // var pageId = +localStorage.pageId || 1;
  var body = document.getElementsByTagName('body')[0];
  // var thisHref = location.href;

  document.addEventListener("touchstart", clickAndTouch, false);
  document.addEventListener("click", clickAndTouch, false);

  // window.addEventListener('popstate', function(event) {
  //   if (thisHref == location.href) return;
  //   render(location.href);
  // }, false);

  window.onbeforeunload = function () { body.style.opacity = 0 };

  function clickAndTouch (e) {
      var href = e.target.href;
      if (!href || e.metaKey) return true;
      // if (href.indexOf(location.host) == -1) return true;
      // if (!history.pushState) return errorCb();

      body.style.opacity = 0;
      e.preventDefault();

      setTimeout(function () {
        location.href = href;
      }, 150)
      // history.pushState({}, document.title, href);
      // render(href);
  }

  // function render(href) {
  //   var time = new Date().getTime();
  //   requestGET(href, function (data) {
  //     if (data) {
  //       var diff = new Date().getTime() - time;
  //       if (diff > 150) successCb(data);
  //       else setTimeout(function() { successCb(data) }, 150 - diff);
  //     }
  //     else errorCb();
  //   }, errorCb);
  //
  //   function successCb(data) {
  //     document.write(data);
  //     document.close();
  //   }
  //   function errorCb() { location.href = href }
  // }

  // function requestGET(url, success, error) {
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url, true);
  //
  //   request.onload = function() {
  //     if (request.status >= 200 && request.status < 400)
  //       success(request.responseText);
  //     else
  //       error();
  //   };
  //
  //   request.onerror = error;
  //   request.send();
  // }
})();
