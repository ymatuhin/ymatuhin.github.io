var el = document.getElementsByTagName('body')[0];
el.innerHTML = el.innerHTML.replace(/«/g, '<span class="slaquo"> </span> <span class="hlaquo"> «</span>')
el.innerHTML = el.innerHTML.replace(/\(/g, '<span class="sbrace"> </span> <span class="hbrace"> (</span>')
