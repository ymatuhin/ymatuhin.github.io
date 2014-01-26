var counter = 0, lastbutton = 123;
function cord(obj)  
{  
	if ( lastbutton == 123 ) {
		var zakaz = document.getElementById(obj.getAttribute('id'));
		lastbutton = obj.getAttribute('id');
		var left = zakaz.offsetLeft;
		var top = zakaz.offsetTop;
		var parent = zakaz.offsetParent;
		while(parent && parent.tagName != "BODY")
		{
		   left += parent.offsetLeft;
		   top += parent.offsetTop;
		   parent = parent.offsetParent;
		}	
		var elem = document.getElementById("forma");  
		elem.style.display = 'block'; 
		elem.style.position = 'absolute'; 
		elem.style.top = top + 27 + "px"; 
		elem.style.left = left + 4 + "px"; 
		zakaz.style.background = 'url("img/inside-monitoring-button-active.png") no-repeat'; 
		zakaz.style.zIndex = 99; 
		counter = 2;
	} else 	{		
		document.getElementById(lastbutton).style.background = 'url("img/inside-monitoring-button.png") no-repeat'; 
		document.getElementById(lastbutton).style.zIndex = 2; 
		
		var zakaz = document.getElementById(obj.getAttribute('id'));
		lastbutton = obj.getAttribute('id');
		var left = zakaz.offsetLeft;
		var top = zakaz.offsetTop;
		var parent = zakaz.offsetParent;
		while(parent && parent.tagName != "BODY")
		{
		   left += parent.offsetLeft;
		   top += parent.offsetTop;
		   parent = parent.offsetParent;
		}	
		var elem = document.getElementById("forma");  
		elem.style.display = 'block'; 
		elem.style.position = 'absolute'; 
		elem.style.top = top + 27 + "px"; 
		elem.style.left = left + 4 + "px"; 
		zakaz.style.background = 'url("img/inside-monitoring-button-active.png") no-repeat'; 
		zakaz.style.zIndex = 99; 
		counter = 2;
	}
}
function allclick()  {
	counter = counter - 1;
	if ( counter <= 0 ) 	
	{		
		var elem = document.getElementById("forma");  
		elem.style.display = 'none'; 
		document.getElementById(lastbutton).style.background = 'url("img/inside-monitoring-button.png") no-repeat'; 
		document.getElementById(lastbutton).style.zIndex = 2; 
	} else { }
}
function submitform()  {
		var elem = document.getElementById("forma");  
		elem.style.display = 'none'; 
		document.getElementById(lastbutton).style.background = 'url("img/inside-monitoring-button.png") no-repeat'; 
		document.getElementById(lastbutton).style.zIndex = 2; 
}
function formclick()  
{
	counter = 2;	 
}