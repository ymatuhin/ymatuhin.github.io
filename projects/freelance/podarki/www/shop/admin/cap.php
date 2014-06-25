<?php
 session_start();
   $file=file("conf/conf.txt");
   if($file[2]!=session_id())
     {
     	echo "<meta http-equiv=refresh content='0; url=index.php'>";
        exit();

     }

?>

<html>

<head>
  <title>Администрирование</title>
	<meta name="robots" content="noindex,nofollow">
  <script language='JavaScript1.1' type='text/javascript'>
<!--
  function win(par)
  {

    var obj=par;
    mainwin=window.open('rgb.html','',
   'Width=550, height=500,left=100,top=100,status=yes,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');

  }
//-->
</script>
  <style>
    #menu a
     {

          font-family:"Times New Roman", "serif";
          font-size:13pt;
          font-style:normal;
          color:#0080FF;

     }
    #head
     {

          font-family:"Times New Roman", "serif";
          font-size:14pt;
          font-style:normal;
          color:#408080;
     }



   #tab
        {

          font-family:"Times New Roman", "serif";
          font-size:11pt;
          font-style:normal;
          color:#595959;
       }


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

   #tab a
      {
      	  font-family:"Times New Roman", "serif";
          font-size:13pt;
          font-style:normal;
          color:#0080FF;
      }

    #info
        {
          border-style:solid;
          border-color:#D7D7D7;
          border-width: 1px;
          font-family:"Times New Roman", "serif";
          font-size:11pt;
          font-style:normal;
          color:#595959;
       }

     #sett1
        {
          border-style:solid;
          border-color:#D7D7D7;
          background-color:#ffffff;
          border-left-width: 0px;
          border-right-width: 1px;
          border-top-width: 0px;
          border-bottom-width:1px;
       }

      #sett2
        {
          border-style:solid;
          border-color:#D7D7D7;
          background-color:#ffffff;
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

   #copy
        {

          font-family:"Times New Roman", "serif";
          font-size:9pt;
          font-style:normal;
          color:#C0C0C0;
       }
   #copy a
        {
          text-decoration:none;
          font-family:"Times New Roman", "serif";
          font-size:9pt;
          font-style:normal;
          color:#C0C0C0;
       }
    .navig_activ
         {
          color:#0080FF;
          font-size:11pt;
          font-weight:600;
          font-family:"Times New Roman", "serif";
          padding:5px;
         }

 .navig_passiv
        {
         color:#808080;
          font-size:11pt;
          font-weight:300;
          font-family:"Times New Roman", "serif";
          padding:5px;
       }

   a.navig_activ
     {
      text-decoration:none;
     }

   a.navig_passiv
     {
      text-decoration:none;
     }

   .menu_cat_a
    {
      color:#FF0000;
      font-size:12pt;
      font-weight:300;
      font-family:"Times New Roman", "serif";
      text-decoration:none;
    }

  .menu_cat_p
    {
      color:#0080FF;
      font-size:12pt;
      font-weight:300;
      font-family:"Times New Roman", "serif";
    }
  a.menu_cat_a
    {

      text-decoration:none;
    }
  #test_color
   {
     border-style:solid;
     border-width: 1px;
     border-color:#D2D2D2;
     width:20px;
     height:10px;
   }
 a.order
        {
          font-family:"Times New Roman", "serif";
          font-size:12pt;
          font-style:normal;
          color:#316262;
          font-weight:600;
          text-decoration:none;
       }
a.order:hover {text-decoration:underline}
  </style>
</head>

<body>
 <table width=100%>
  <tr>
     <td id=head>
<?php
      $expl=explode("/",$_SERVER['PHP_SELF']);
      switch($expl[count($expl)-1])
             {
               case "admin.php":echo "::&nbsp;Добавить товар&nbsp;::";
               break;
               case "admin1.php":echo "::&nbsp;Настройки&nbsp;::";
               break;
               case "admin2.php":echo "::&nbsp;Заказы&nbsp;::";
               break;
               case "admin4.php":echo "::&nbsp;Логин пароль&nbsp;::";
               break;

               case "order.php":echo "::&nbsp;Заказ&nbsp;::";
               break;
             }


?>
      </td><td id=copy align=right>Корзина 1.0 &nbsp;&nbsp;&nbsp;&copy;<a href="http://homescript.ru">Домашние скрипты</a></td></tr>
    <tr>
      <td align=right id=menu colspan=2>
                     <a href="admin.php">Добавить товар</a>&nbsp;|&nbsp;
                     <a href="admin1.php">Настройки</a>&nbsp;|&nbsp;
                     <a href="admin2.php">Заказы</a>&nbsp;|&nbsp;
                     <a href="admin4.php">Логин пароль</a>&nbsp;|&nbsp;
                     <a href=http://<?php echo $_SERVER['SERVER_NAME'] ?>>Выход</a>&nbsp;&nbsp;
      </td>
    <tr>
 </table><p></p><p></p><p></p>

