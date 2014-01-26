<?php
 $catalog='shop';
if(!file_exists("$catalog/admin/admin1.php"))exit("Не надо этот файл открывать!");

?>
<style>
	#st {
		margin:28px 0 0 55px;
		text-align:center;
		padding-right:10px;
	}
   #st a
    {
      color:#000;
	  font: 14px/18px Calibri, Tahoma, Verdana, sans-serif;
      font-weight:300;
    }
</style>

<div id="st">корзина пуста</div>
<script type="text/javascript">

 function rel()
  {
     if(navigator.appName=='Microsoft Internet Explorer' || navigator.appName=='Opera')
      {
      	window.history.go(0);
      }
     else
      {
      	window.location.reload();
      }
  }

function win()
  {
    window.open('/site/podarki/<?php echo $catalog ?>/form.php?op=1','','width=750,height=450,status=no,toolbar=no,menubar=no,scrollbars=yes')
  }

 function c(n)
   {
     var cookies=new Array();
     cookies=document.cookie.split('bas=');
     var ws=new Date();
     ws.setDate(1+ws.getDate());

     if(cookies.length>1)
       {
          cookies[1]=unescape(cookies[1]);
       	  cookies[1]=cookies[1]+"|"+n;
       	  document.cookie="bas="+cookies[1]+";  path=/; expires="+ ws.toGMTString();
       	  var count=cookies[1].split('|');
       	  var count=count.length;
          document.getElementById("st").innerHTML="&nbsp;<a href=javascript:win();>подарков в корзине "+count+"</a>";

       }
    else
      {
        document.cookie="bas="+n+";  path=/; expires="+ ws.toGMTString();
        document.getElementById("st").innerHTML="&nbsp;<a href=javascript:win();>подарков в корзине 1</a>";
      }
   }

var cookies=document.cookie.split('bas=');

     if(cookies.length>1)
       {
       	  cookies[1]=unescape(cookies[1]);
       	  var count=cookies[1].split('|');
       	  var count=count.length;
          document.getElementById("st").innerHTML="&nbsp;<a href=javascript:win();>подарков в корзине "+count+"</a>";

       }



</script>



