function cord(obj)  
{  
	var zakaz = document.getElementById(obj.getAttribute('id'));
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
}
function changedisplay()  
{  
	var elem = document.getElementById("forma");  
	elem.style.display = 'block'; 
}  
function over(obj)  
{  
	var zakaz = document.getElementById(obj.getAttribute('id'));
	zakaz.style.background = 'url("img/inside-monitoring-button.png") no-repeat'; 
	zakaz.style.zIndex = 2; 
	var elem = document.getElementById("forma");  
	elem.style.display = 'none'; 
} 
function overform()  
{  
	var elem = document.getElementById("forma");  
	elem.style.display = 'none'; 
	alert(zakaz);
} 