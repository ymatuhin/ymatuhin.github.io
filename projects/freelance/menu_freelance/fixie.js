jsHover = function() {
    var hEls = document.getElementById("nav").getElementsByTagName("LI");
    for (var i=0, len=hEls.length; i<len; i++) {
      hEls[i].onmouseover=function() { this.className+=" jshover"; }
      hEls[i].onmouseout=function() { this.className=this.className.replace(" jshover", ""); }
    }
  }
  if (window.attachEvent && navigator.userAgent.indexOf("Opera")==-1) window.attachEvent("onload", jsHover);
