(function () {
  var body = document.getElementsByTagName('body')[0];

  document.addEventListener("touchstart", clickAndTouch, false);
  document.addEventListener("click", clickAndTouch, false);

  window.addEventListener('popstate', function(event) {
      if (!event.state) return;
      clickAndTouch.call(null, event, document.location.href);
  }, false);

  function clickAndTouch (e, loc) {
      var href = e.target.href || loc;
      console.log('loc', loc);
      console.log('href', href);
      if (!href || e.metaKey) return true;
      body.style.opacity = 0;
      if (href.indexOf(location.host) == -1) return true;
      if (!history.pushState) return errorCb();

      var time = new Date().getTime();
      e.preventDefault();
      history[loc ? 'replaceState' : 'pushState']({}, time, href);
      requestGET(href, function (data) {
        if (data) {
          var diff = new Date().getTime() - time;
          console.log('diff', diff);
          if (diff <= 150) successCb(data);
          else setTimeout(function() { successCb(data) }, 150 - diff);
        }
        else errorCb();
      }, errorCb);

      function successCb(data) {
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
