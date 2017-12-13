//This is the "Offline copy of pages" service worker

//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker


(function () {
  if (!navigator.serviceWorker) return;

  if (navigator.serviceWorker.controller) {
  } else {
    // Register the ServiceWorker
    navigator.serviceWorker.register('/pwabuilder-sw.js', {
      scope: './'
    }).then(function(reg) {
    });
  }
})()
