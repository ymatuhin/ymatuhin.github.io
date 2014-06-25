<?php
include('cap.php');

if(isset($_POST['go']))
  {
     $f=fopen("conf/sett.txt","w");
     fwrite($f,$_POST['mail']."\r\n");

     if(isset($_POST['fam']))  fwrite($f,"checked\r\n");
     else  fwrite($f,"\r\n");

     if(isset($_POST['name']))  fwrite($f,"checked\r\n");
     else  fwrite($f,"\r\n");

     if(isset($_POST['us_mail']))  fwrite($f,"checked\r\n");
     else  fwrite($f,"\r\n");

      if(isset($_POST['fone']))  fwrite($f,"checked\r\n");
      else  fwrite($f,"\r\n");

      if(isset($_POST['adr']))  fwrite($f,"checked\r\n");
      else  fwrite($f,"\r\n");

       if(isset($_POST['metr']))  fwrite($f,"checked\r\n");
      else  fwrite($f,"\r\n");

      if(is_numeric($_POST['in_price']))  fwrite($f,$_POST['in_price']."\r\n");
     else  fwrite($f,"0\r\n");

       if($_POST['view_price']!="")  fwrite($f,$_POST['view_price']."\r\n");
     else  fwrite($f,"руб\r\n");

     fclose($f);

  }
$conf=file("conf/sett.txt");
for($i=0; $i<count($conf); $i++) $conf[$i]=trim($conf[$i]);



?>
<form  method="post">
<table CELLSPACING=0 align=center width=70%>
<tr>
  <td valign=top  >
      <input type="submit" value="сохранить" id=button name=go>
  </td>

</tr>
</table><br />

<table  id=tab1 CELLPADDING=10 CELLSPACING=0 align=center width=70%>
<tr>
  <td valign=top id=sett1  width=25%>
      e-mail, на который приходит заказ
  </td>

  <td valign=top id=sett2>
       <input name="mail" type="text" value="<? echo @$conf[0]?>">
  </td>
</tr>

<tr>
  <td valign=top   colspan=2 align=center bgcolor=#F8F8F8>
      ДАННЫЕ ДЛЯ ЗАКАЗА
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
      Фамилия
  </td>

  <td valign=top id=sett2>
       <input name="fam" type="checkbox" value="ON" <?php echo @$conf[1]  ?>>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
      Имя
  </td>

  <td valign=top id=sett2>
       <input name="name" type="checkbox" value="ON" <?php echo @$conf[2]  ?>>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
      e-mail
  </td>

  <td valign=top id=sett2>
       <input name="us_mail" type="checkbox" value="ON" <?php echo @$conf[3]  ?>>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
     Телефон
  </td>

  <td valign=top id=sett2>
       <input name="fone" type="checkbox" value="ON" <?php echo @$conf[4]  ?>>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
     Адрес
  </td>

  <td valign=top id=sett2>
       <input name="adr" type="checkbox" value="ON" <?php echo @$conf[5]  ?>>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
     Ближайшее метро
  </td>

  <td valign=top id=sett2>
       <input name="metr" type="checkbox" value="ON" <?php echo @$conf[6]  ?>>
  </td>
</tr>

<tr>
  <td valign=top   colspan=2 align=center bgcolor=#F8F8F8>
      ДЕНЬГИ
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
     Сколько за доставку
  </td>

  <td valign=top id=sett2>
       <input name="in_price" type="text" value="<? echo @$conf[7]?>" size=3>
  </td>
</tr>

<tr>
  <td valign=top id=sett1  width=25%>
     Сокращение для денежной единицы(напр. руб)
  </td>

  <td valign=top id=sett2>
       <input name="view_price" type="text" value="<? echo @$conf[8]?>" size=3>
  </td>
</tr>


 </table>

<br /><table  CELLSPACING=0 align=center width=70%>
<tr>
  <td valign=top  >
      <input type="submit" value="сохранить" id=button name=go>
  </td>

</tr>
</table>
 </form>

