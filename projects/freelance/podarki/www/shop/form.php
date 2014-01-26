<?php
if(!isset($_COOKIE['mov'])) setcookie ("mov", "2",  time()+86400,"/");

 if(isset($_COOKIE['bas']))
 {
       $list=file("admin/db/price.txt");
      $conf=file("admin/conf/sett.txt");
      for($i=0; $i<count($conf); $i++) $conf[$i]=trim($conf[$i]);

      $name=array();
      $price=array();
      foreach($list as $line)
       {
       	 $line=trim($line);
       	 $expl=explode("*",$line);
       	 $name[$expl[2]]=$expl[0];
       	 $price[$expl[2]]=$expl[1];
       }

      $expl=explode("|",$_COOKIE['bas']);
      $count_staf=array_count_values($expl);


       $info="";
      if(isset($_POST['go']))
        {
          if($conf[1]!="")
            {
              $_POST['fam']=trim($_POST['fam']);
              $_POST['fam']=htmlspecialchars($_POST['fam']);
              $_POST['fam']=stripcslashes($_POST['fam']);
              if($_POST['fam']=="")$info="Введите все данные";
            }
           if($conf[2]!="")
            {
              $_POST['nam']=trim($_POST['nam']);
              $_POST['nam']=htmlspecialchars($_POST['nam']);
              $_POST['nam']=stripcslashes($_POST['nam']);
              if($_POST['nam']=="")$info="Введите все данные";
            }
           if($conf[3]!="")
            {
              $_POST['user_mail']=trim($_POST['user_mail']);
              $_POST['user_mail']=htmlspecialchars($_POST['user_mail']);
              $_POST['user_mail']=stripcslashes($_POST['user_mail']);
              if($_POST['user_mail']=="")$info="Введите все данные";
            }

           if($conf[4]!="")
            {
              $_POST['fone']=trim($_POST['fone']);
              $_POST['fone']=htmlspecialchars($_POST['fone']);
              $_POST['fone']=stripcslashes($_POST['fone']);
              if($_POST['fone']=="")$info="Введите все данные";
            }

          if($conf[5]!="")
            {
              $_POST['adr']=trim($_POST['adr']);
              $_POST['adr']=htmlspecialchars($_POST['adr']);
              $_POST['adr']=stripcslashes($_POST['adr']);
              if($_POST['adr']=="")$info="Введите все данные";
            }

           if($conf[6]!="")
            {
              $_POST['metr']=trim($_POST['metr']);
              $_POST['metr']=htmlspecialchars($_POST['metr']);
              $_POST['metr']=stripcslashes($_POST['metr']);
              if($_POST['metr']=="")$info="Введите все данные";
            }

           if($info=="" && $conf[0]!="")
             {
                 $css="<style>
                  #tab1
                       {
                           border-style:solid;
                           border-color:#D7D7D7;
                           border-width: 1px;
                           font-family:Times New Roman, serif;
                           font-size:11pt;
                           font-style:normal;
                           color:#595959;
                      }
                   #sett1
                      {
                        border-style:solid;
                         border-color:#D7D7D7;
                        border-left-width: 0px;
                        border-right-width: 1px;
                        border-top-width: 0px;
                        border-bottom-width:1px;
                     }

                  #sett2
                     {
                        border-style:solid;
                        border-color:#D7D7D7;
                        border-left-width: 0px;
                        border-right-width: 0px;
                        border-bottom-width:1px;
                        border-top-width: 0px;
                     }

                      </style>";

                 $tab_staf="<table  id=tab1 CELLPADDING=10 CELLSPACING=0 align=center width=90%>
                             <tr><td id=sett1>название</td><td id=sett1>количество</td><td id=sett1>цена</td><td id=sett2>стоимость</td></tr>";
                  $i=0;
                  foreach($count_staf as $k=>$v)
                   {
                     $oll=$price[$k]*$v;
                     $tab_staf.="<tr><td id=sett1>$name[$k]</td><td align=center id=sett1>$v</td><td  align=center id=sett1>$price[$k]&nbsp;$conf[8]</td><td id=sett2 align=center>$oll&nbsp;$conf[8]</td></tr>";
                     $i+=$oll;
                   }


                   if($_COOKIE['mov']=="1")
                    {
            	     $i+=$conf[7];
            	     $info_mov="Общая стоимость заказа с доставкой $i&nbsp;$conf[8]";
                    }
                   else
                    {
                     $info_mov="Общая стоимость заказа без доставки $i&nbsp;$conf[8]";
                    }

                  $i+=$conf[7];
                  $tab_staf.="<tr><td colspan=4>$info_mov</td></tr></table><br /><br />";

                  $tab_user="<table  id=tab1 CELLPADDING=10 CELLSPACING=0 align=center width=90%>";

                  if($conf[1]!="")$tab_user.= "<tr><td id=sett1>Фамилия</td><td id=sett2>$_POST[fam]</td></tr>";
                  if($conf[2]!="")$tab_user.= "<tr><td id=sett1>Имя</td><td id=sett2>$_POST[nam]</td></tr>";
                  if($conf[3]!="")$tab_user.= "<tr><td id=sett1>E-mail</td><td id=sett2>$_POST[user_mail]</td></tr>";
                  if($conf[4]!="")$tab_user.= "<tr><td id=sett1>Телефон</td><td id=sett2>$_POST[fone]</td></tr>";
                  if($conf[5]!="")$tab_user.= "<tr><td id=sett1>Адрес</td><td id=sett2>$_POST[adr]</td></tr>";
                  if($conf[6]!="")$tab_user.= "<tr><td id=sett1>Ближайшее метро</td><td id=sett2>$_POST[metr]</td></tr>";
                  $tab_user.="</table>";

                   //сохраняем заказ
                   $tab_staf_save=str_replace("\r\n","",$tab_staf);
                   $tab_user_save=str_replace("\r\n","",$tab_user);

                   $f=fopen("admin/db/order/".time(),"w+");
                   fwrite($f,date("d.m.Y H:i")."\r\n".$tab_staf_save.$tab_user_save);
                   fclose($f);

                   $subject="Новый заказ на сайте $_SERVER[SERVER_NAME]";
                   $headers= "MIME-Version: 1.0\r\n";
                   $headers.= "Content-type: text/html; charset=windows-1251\r\n";
                   $label=str_replace("www","",$_SERVER['SERVER_NAME']);
                   $label="admin@".$label;
                   $headers.= "From: Administrator<$label>\r\n";
                   $messag=$css.$tab_staf.$tab_user;
                   mail("$conf[0]", $subject, $messag,$headers);
                   setcookie ("bas", "", time() - 3600,"/");
                   setcookie ("mov", "", time() - 3600,"/");
                   echo "<meta http-equiv=refresh content='0; url=form.php?op=3'>";
                   exit();
             }
        }

       if(isset($_GET['d']))
        {
            $expl1=array();
            $search=false;
            foreach($expl as $line)
             {
                if($line==$_GET['d'] && $search==false)
                  {
                  	 $search=true;
                  	 continue;
                  }

               	$expl1[]=$line;
             }
          $expl1=implode("|",$expl1);
          $expl1=urldecode($expl1);
          setcookie ("bas", $expl1,  time()+86400,"/");

          echo "<meta http-equiv=refresh content='0; url=form.php?op=1'>";
          exit();
        }

         if(isset($_GET['add']))
        {
            $search=false;
            foreach($expl as $line)
             {
                if($line==$_GET['add'])
                  {
                  	 $search=true;
                  	 break;
                  }
             }

          if($search)
             {
             	$expl[]=$_GET['add'];
             	$expl=implode("|",$expl);
                $expl=urldecode($expl);
                setcookie ("bas", $expl,  time()+86400,"/");
             }


          echo "<meta http-equiv=refresh content='0; url=form.php?op=1'>";
          exit();
        }


 }
if($_GET['op']==1)
 {
   if(isset($_POST['go_mov']))
    {
     if(isset($_POST['mov'])) setcookie ("mov", "1",  time()+86400,"/");
     else setcookie ("mov", "2",  time()+86400,"/");
      echo "<meta http-equiv=refresh content='0; url=form.php?op=1'>";
      exit();
    }
 }

?>

<html>
<head>
<style>

#tab1
        {
          border-style:solid;
          border-color:#D7D7D7;
          border-width: 1px;
          font-family:"Times New Roman", "serif";
          font-size:11pt;
          font-style:normal;
          color:#595959;
       }

#tab
        {
          font-family:"Times New Roman", "serif";
          font-size:11pt;
          font-style:normal;
          color:#595959;
       }

 #sett1
        {
          border-style:solid;
          border-color:#D7D7D7;
          border-left-width: 0px;
          border-right-width: 1px;
          border-top-width: 0px;
          border-bottom-width:1px;
       }

      #sett2
        {
          border-style:solid;
          border-color:#D7D7D7;
          border-left-width: 0px;
          border-right-width: 0px;
          border-bottom-width:1px;
          border-top-width: 0px;
       }

 #button {

       font-family:"Times New Roman", "serif";
       color:#606060;
       font-size:12pt;
       background-color:#F7F7F7;
      font-weight:300;
      text-align:center;
      padding:2px;
      border-style:solid;
      border-width: 1px;
      border-color:#4B4B4B;
      }


   #copy a
        {
          text-decoration:none;
          font-family:"Times New Roman", "serif";
          font-size:9pt;
          font-style:normal;
          color:#C0C0C0;
       }
</style>

<title>Ваша корзина</title>
	<meta name="robots" content="noindex,nofollow">
</head>
<body onUnload="window.opener.rel();">

<?php
  if(isset($_COOKIE['bas']))
    {

      if($_GET['op']==1)
        {
          echo"<form name=frm  method=post><table id=tab width=90% align=center><tr><td colspan=2><table  id=tab1 CELLPADDING=10 CELLSPACING=0 width=100%>
            <tr><td id=sett1 align=center>название</td><td id=sett1 align=center>количество</td><td id=sett1 align=center>цена</td>
            <td id=sett1 align=center>стоимость</td><td id=sett2 align=center>действия</td></tr>";
           $i=0;
           foreach($count_staf as $k=>$v)
             {
               $oll=$price[$k]*$v;
               echo "<tr><td id=sett1>$name[$k]</td><td align=center id=sett1>$v</td><td  align=center id=sett1>$price[$k]&nbsp;$conf[8]</td>
               <td id=sett1 align=center>$oll&nbsp;$conf[8]</td><td id=sett1 align=center><a href=form.php?d=$k><img src=admin/img/min.png alt=удалить border=0></a>
               &nbsp;&nbsp;&nbsp;<a href=form.php?add=$k><img src=admin/img/add.png alt=добавить border=0></a></td></tr>";
               $i+=$oll;
             }

         if(isset($_COOKIE['mov']))
          {
            if($_COOKIE['mov']=="1")
              {
            	 $check_mov='checked';
            	 $i+=$conf[7];
            	 $info_mov="Общая стоимость заказа с доставкой $i&nbsp;$conf[8]";
              }
             else
              {
                $check_mov="";
                $info_mov="Общая стоимость заказа без доставки $i&nbsp;$conf[8]";
              }
          }
          else
          {
          	 $check_mov="";
             $info_mov="Общая стоимость заказа без доставки $i&nbsp;$conf[8]";
          }




          echo "<tr><td colspan=5>$info_mov</td></tr></table></td></tr><tr><td>

           <input name=mov type=checkbox value=ON  $check_mov>&nbsp;доставка</td><td align=right>
           <input type=submit value=пересчитать id=button name=go_mov>

          </td></tr></table></form><br /><br />
          <div align=center><input type=button value='Оформить заказ' id=button onclick=javascript:window.location.replace('form.php?op=2')></div>";
        }

      if($_GET['op']==2)
        {
          echo "<form method=post>
          <table  id=tab CELLPADDING=10 CELLSPACING=0 align=center >";
          if($info!="")echo "<tr><td><font color=red>$info</font></td></tr>";

          if($conf[1]!="")echo "<tr><td>Фамилия<br /><input name=fam type=text value='".@$_POST['fam']."' size=50></td></tr>";
          if($conf[2]!="")echo "<tr><td>Имя<br /><input name=nam type=text value='".@$_POST['nam']."' size=50></td></tr>";
          if($conf[3]!="")echo "<tr><td>E-mail<br /><input name=user_mail type=text value='".@$_POST['user_mail']."' size=50></td></tr>";
          if($conf[4]!="")echo "<tr><td>Телефон<br /><input name=fone type=text value='".@$_POST['fone']."' size=50></td></tr>";
          if($conf[5]!="")echo "<tr><td>Адрес<br /><input name=adr type=text value='".@$_POST['adr']."' size=50></td></tr>";
          if($conf[6]!="")echo "<tr><td>Ближайшее метро<br /><input name=metr type=text value='".@$_POST['metr']."' size=50></td></tr>";
          echo"<tr><td><input type=submit value=Отправить id=button name=go></td></tr></table></form>";

        }

    }
 if(!isset($_COOKIE['bas']) && @$_GET['op']!=3)
   {
   	 echo"<table  id=tab CELLPADDING=10 CELLSPACING=0 align=center valign=center><tr><td>
          Ваша корзина пуста!<br /><br />
           <div align=center><input type=button value=Закрыть id=button onclick=window.close()></div>

           </td></tr></table>";
   }
  if($_GET['op']==3)
        {
           echo"<table  id=tab CELLPADDING=10 CELLSPACING=0 align=center valign=center><tr><td>
           Спасибо. Ваш заказ принят!<br /><br />
           <div align=center><input type=button value=Закрыть id=button onclick=window.close()></div>
           </td></tr></table>";
        }
?>

<br><br><br><div id=copy align="center"><a href=http://homescript.ru>&copy;Домашние скрипты</a></div>
</body>
</html>