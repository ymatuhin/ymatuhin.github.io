window.doesSupportEmoji=function(){var a;if(document.createElement("canvas").getContext&&(a=document.createElement("canvas").getContext("2d"),"function"==typeof a.fillText))return smile=String.fromCodePoint(128516),a.textBaseline="top",a.font="32px Arial",a.fillText(smile,0,0),0!==a.getImageData(16,16,1,1).data[0]};
var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
if (!doesSupportEmoji() || !isMacLike) {
    var script = document.createElement('script');
    script.onload = function () { twemoji.parse(document.querySelector('.text-content')) };
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", "//twemoji.maxcdn.com/2/twemoji.min.js");
    document.getElementsByTagName("head")[0].appendChild(script);
}
