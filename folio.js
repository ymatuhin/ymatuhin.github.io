function createBlock(title, tehno, addInfo, nav) {
	var parentElem = document.body;

    var divTag = document.createElement("div"); 

    divTag.id = "ymatuhin"; 

    // divTag.setAttribute("align", "center"); 

    // divTag.style.margin = "0px auto"; 

    // divTag.className = "dynamicDiv"; 

   	var infoText = '', navText = '';
    if (addInfo) {
    	infoText = "Дополнительно: <b>" + addInfo + "</b><br>";
    }
    if (nav) {
    	navText = "Навигация: " + nav + "<br>";
    }

    divTag.innerHTML = 	"Юрий [<a href='http://ymatuhin.ru/'>ymatuhin</a>] Матюхин<br>"
    					+ "<a href='mailto:ymatuhin@yandex.ru'>ymatuhin@yandex.ru</a><br>"
    					+ "front end разработчик<br><br>"
    					+ ""
    					+ "Название проекта: <b>" + title + "</b><br>"  
    					+ "Технологии: <b>" + tehno + "</b><br>"  
                        + infoText
    					+ navText;

    var scriptTag = document.createElement("style");
    scriptTag.innerHTML = "@import url(http://fonts.googleapis.com/css?family=Cuprum:400,700&subset=latin,cyrillic); #ymatuhin {width: 250px;font-family: 'Cuprum', sans-serif; font-size: 18px; line-height: 22px;position: fixed; left:0; top:0; padding: 10px; background: #fff; border-bottom: 1px solid #999;border-right: 1px solid #999; -moz-box-shdow: 0px 0px 10px 3px #666;-webkit-box-shadow: 0px 0px 10px 3px #666;box-shadow: 0px 0px 10px 3px #666; color: #000; z-index: 1000;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90); -moz-opacity: 0.9; -khtml-opacity: 0.9; opacity: 0.9; zoom: 1;} #ymatuhin a {color: blue;} #ymatuhin a:active {color: red;} #ymatuhin a:visited {color: darkviolet;}";


    


    parentElem.insertBefore(scriptTag, parentElem.firstChild);
    parentElem.insertBefore(divTag, parentElem.firstChild); 
}