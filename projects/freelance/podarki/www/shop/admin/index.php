<?php
   session_start();
   $info="";
   if(isset($_POST['login']))
     {
       $_POST['login']=trim($_POST['login']);
       $_POST['pasv']=trim($_POST['pasv']);
       $file=file("conf/conf.txt");
       $file[0]=trim($file[0]);
       $file[1]=trim($file[1]);

       if(md5($_POST['login'])==$file[0])
         {
         	if(md5($_POST['pasv'])==$file[1])
         	  {
                $f=fopen("conf/conf.txt","w");
                fwrite($f,$file[0]."\r\n".$file[1]."\r\n".session_id());
                fclose($f);
                echo "<meta http-equiv=refresh content='0; url=admin.php'>";
                exit();
         	  }

         }
      $info="<font color=red>Неправильный логин или пароль!</font><br />";
     }

?>
<html>

<head>
  <title>Авторизация</title>
	<meta name="robots" content="noindex,nofollow">
  <style>

 #m_info
        {

          font-family:"Times New Roman", "serif";
          font-size:12pt;
          font-style:normal;
          border-style:solid;
          border-width: 1px;
          border-color:#D7D7D7;
          background-color:#ffffff;
          color:#595959;
          width:300px;
       }
  #m_button {

       font-family:"Times New Roman", "serif";
       color:#408080;
       font-size:9pt;
       background-color:#C0C0C0;
      font-weight:600;
      text-align:center;
      width:60px;
      }
  h3
   {
          font-family:"Times New Roman", "serif";
          font-size:12pt;
          font-style:normal;
          color:#FF8000;

   }
  </style>
</head>

<body>
<form action="index.php" method="post">
<table width=100% height=80%>
                  <tr><td>
                <table id=m_info align=center valign=center  CELLPADDING=5>
                 <tr>
                  <td ><h3>Авторизация</h3><br />
                     <?php if($info!="")echo $info ?>
                       логин<br />
                       <input name="login" type="text" size=30><br />
                       пароль<br />
                       <input name="pasv" type="password" value="" size=30><br /><br />
                       <input type="submit" value="вход" id=m_button>


                   </td>
                </tr>
             </table>
         </td>
           </tr>
        </table>
</form>
</body>

</html>