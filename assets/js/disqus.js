var body = body || document.getElementsByTagName('body')[0];
var disqus = document.getElementById("disqus_thread");
var inserted = false;

insert();
window.onscroll = insert;

function insert() {
    if (!disqus || inserted) return;

    var scrollSize = window.innerHeight + window.scrollY;
    if (scrollSize >= disqus.offsetTop - (window.innerHeight / 3)) {
        console.log('INSERT!');

        inserted = true;
        var oScript = document.createElement("script");
    	oScript.type = "text\/javascript";
    	oScript.async = true;
    	body.appendChild(oScript);
    	oScript.src = '//ymatuhin.disqus.com/embed.js';
    }
}
