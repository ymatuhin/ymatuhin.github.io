<?php
include('cap.php');
//setlocale (LC_ALL, array ('ru_RU.CP1251', 'rus_RUS.1251'));
$info="";
if(isset($_POST['save']))
  {
     $_POST['name'] =trim($_POST['name']);
     $_POST['price'] =trim($_POST['price']);
     $_POST['name']=stripcslashes($_POST['name']);
     $_POST['name']=str_replace("*","",$_POST['name']);

     $_POST['price']=str_replace(",",".",$_POST['price']);
     if($_POST['name']=="" || $_POST['price']=="" )$info="Для введения обязательны все данные.";
     if(!is_numeric($_POST['price']))$info.=" Введите корректную цену";
     if($info=="")
        {
           $f=fopen("db/price.txt","a+");
           fwrite($f,$_POST['name']."*".$_POST['price']."*".time()."\r\n");
           fclose($f);
           echo "<meta http-equiv=refresh content='0; url=admin.php'>";
           exit();
        }

  }




$file=array();
$file1=array();


if(isset($_POST['search']))
  {
  	 $_POST['text']=trim($_POST['text']);
  	 if($_POST['text']!="")
  	   {
  	   	 $s=urlencode($_POST['text']);
  	   	 echo "<meta http-equiv=refresh content='0; url=admin.php?s=$s'>";
         exit();
  	   }

  }

if(!isset($_GET['s']))$file=file("db/price.txt");
else
 {
 	$s=urldecode($_GET['s']);
 	$search=file("db/price.txt");
 	foreach($search as $line)
       {
         $line=trim($line);
         $expl=explode("*",$line);
         if(stristr($expl[0],$s))$file[]=$line;
       }
 }

for($n=0;$n<count($file);$n++)$file[$n]=trim($file[$n]);

foreach($file as $line)
 {
   $expl=explode("*",$line);
   $file1[$expl[1]."*".$expl[2]]=$expl[0];
 }

asort($file1,SORT_STRING);
$file=array();
foreach($file1 as $k=>$v) $file[]="$v*$k";

//Постраничная навигация
 $topic_count_page=100;
 if(!isset($_GET['page']) || !is_numeric(@$_GET['page']) || @$_GET['page']<1 )$page=1;
 else $page=$_GET['page'];
 if($page > ceil(count($file)/ $topic_count_page))$page=1;
 $start=$page * $topic_count_page-$topic_count_page;
 $pages=ceil(count($file)/ $topic_count_page);
 if(empty($_GET['ind']) || !is_numeric(@$_GET['ind']) || @$_GET['ind']>ceil($pages/$topic_count_page)  || @$_GET['ind']<1)$index=1;
 else $index= $_GET['ind'];



if(isset($_POST['red_name']))
  {

     $_POST['red_name'] =trim($_POST['red_name']);
     $_POST['red_price'] =trim($_POST['red_price']);
     $_POST['red_name']=stripcslashes($_POST['red_name']);
     $_POST['red_name']=str_replace("*","",$_POST['red_name']);

     $_POST['red_price']=str_replace(",",".",$_POST['red_price']);
     if($_POST['red_name']=="" || $_POST['red_price']=="" )$info="Для введения обязательны все данные.";
     if(!is_numeric($_POST['red_price']))$info.=" Введите корректную цену";
     if($info=="")
        {
           $file=file("db/price.txt");
           $f=fopen("db/price.txt","w");
           foreach($file as $line)
           {
              $line=trim($line);
              $expl=explode("*",$line);
              if($expl[2]==$_GET['red']) fwrite($f,$_POST['red_name']."*".$_POST['red_price']."*$expl[2]\r\n");
              else fwrite($f,"$line\r\n");
           }
           fclose($f);
           echo "<meta http-equiv=refresh content='0; url=admin.php?page=$page&ind=$index'>";
           exit();
        }

  }


if(isset($_GET['del']))
  {
           $file=file("db/price.txt");
           $f=fopen("db/price.txt","w");
           foreach($file as $line)
           {
              $line=trim($line);
              $expl=explode("*",$line);
              if($expl[2]==$_GET['del']) continue;
              fwrite($f,"$line\r\n");
           }
           fclose($f);
           echo "<meta http-equiv=refresh content='0; url=admin.php?page=$page&ind=$index'>";
           exit();
  }




?>

 <form  method="post" >
<table  id=tab CELLPADDING=10 align=center width=70%>
<?php
if($info!="")echo"<tr><td colspan=2><font color=red>$info</font></td></tr>";

?>

<tr><td>
Название и цена<br />
<input name="name" type="text" value="" size=50>&nbsp;&nbsp;
<input name="price" type="text" value="" size=5>&nbsp;&nbsp;
<input type="submit" value="Сохранить"  name=save>
</td>
<td align=right>
<input name="text" type="text" value="">&nbsp;&nbsp;<input type="submit" value="Поиск" name=search>
</td></tr>
  </table>

 <?php
if(count($file)> $topic_count_page)
    {
      //Постраничная навигаця
         echo "<table  align=center><tr><td>";

          if($index>1)echo "
         <a class='navig_passiv' href=admin.php?page=".(($index-1)*10)."&ind=".($index-1)." title=назад><<</a>";

         for($i=$index*10-9,$p=1; $i < $pages+1; $i++,$p++)
          {

            if($p>10 )
          	  {
          	  	echo "<a class='navig_passiv'  href=admin.php?page=".($i)."&ind=".($index+1)." title=далее>>></a>";
          	  	break;
          	  }
          	if($page==$i)
            echo "<a class='navig_activ' href=admin.php?page=$i&ind=$index>$i</a>";
            else
            echo "<a class='navig_passiv'href=admin.php?page=$i&ind=$index>$i</a>";
          }


       echo "</td></tr></table><br />";
    }
?>


<table  id=tab1 CELLPADDING=10 CELLSPACING=0 align=center  width=70%>
<tr><td id=sett1><b>название</b></td><td id=sett1><b>цена</b></td><td id=sett1><b>код для вставки</b></td>
<td id=sett2><b>действия</b></td></tr>
 <?php
    for($x=$start,$y=0; $x<count($file); $x++,$y++)
     {
      if($y==$topic_count_page)break;
      $file[$x]=trim($file[$x]);
      $expl=explode("*",$file[$x]);

      if(@$_GET['red']==$expl[2])
       echo"<tr><td id=sett1><input name=red_name type=text value='$expl[0]'></td><td id=sett1>
       <input name=red_price type=text value=$expl[1] size=5></td><td id=sett1>
       &lt;a class=\"i\" href=\"javascript:c('$expl[2]')\">в корзину&lt;/a&gt;
       </td>
      <td id=sett2>
      <input type=submit value=сохранить>
      </td>
      </tr>";

      else
      {
        if(!isset($_GET['s']))
         {
         	 $link1="page=$page&ind=$index&red=$expl[2]";
         	 $link2="page=$page&ind=$index&del=$expl[2]";
         }
         else
         {
         	$s=urlencode($_GET['s']);
         	$link1="page=$page&ind=$index&red=$expl[2]&s=$s";
         	$link2="page=$page&ind=$index&del=$expl[2]&s=$s";
         }
        echo"<tr><td id=sett1>$expl[0]</td><td id=sett1>$expl[1]</td><td id=sett1>
        &lt;a class=\"in\" href=\"javascript:c('$expl[2]')\">в корзину&lt;/a&gt;
        </td>
        <td id=sett2>
        <a href=admin.php?$link1><img src=img/red.png alt=редактировать border=0></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href=admin.php?$link2><img src=img/del.png alt=удалить border=0></a>
        </td>
        </tr>";
      }
    }
?>

</table>
  </form>
