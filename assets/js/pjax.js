(function () {
  var body = document.getElementsByTagName('body')[0];
  setTimeout(function() { body.style.opacity = 1 }, 10);

  document.addEventListener("touchstart", clickAndTouch, false);
  document.addEventListener("click", clickAndTouch, false);

  function clickAndTouch (e) {
      var href = e.target.href;
      if (!href || e.metaKey) return true;
      body.style.opacity = 0;
      if (href.indexOf(location.host) == -1) return true;

      var time = new Date().getTime();
      e.preventDefault();
      requestGET(href, function (data) {
        if (data) {
          var diff = new Date().getTime() - time;
          if (diff < 150) successCb(data);
          else setTimeout(function() { successCb(data) }, 150 - diff);
        }
        else errorCb();
      }, errorCb);

      function successCb(data) {
        if (!history.pushState) return errorCb();
        history.pushState({}, '', href);
        document.write(data);
        document.close();
      }
      function errorCb() { location.href = href }
  }

  function requestGET(url, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400)
        success(request.responseText);
      else
        error();
    };

    request.onerror = error;
    request.send();
  }
})();
