<?php
 include("cap.php");
 if(!isset($_GET['id']) || !file_exists("db/order/$_GET[id]")) exit();
 $file=file("db/order/$_GET[id]");
 $file[0]=trim($file[0]);
 echo"<table  id=tab CELLPADDING=10 CELLSPACING=0 align=center width=70%><tr><td>
 $file[0]<br /><br /><br />$file[1]
 </td></tr></table>";

?>

