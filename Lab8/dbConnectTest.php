
<?php
        

$db_host="localhost";
       $db_username="testUser";
	$db_passwd="n01098567";
 	$dbc=mysqli_connect('localhost','testuser','n01098567','addressbook')
	 or die ("Could not Connect! \n");
	
	
 	echo "Connection established. \n";
	 mysqli_close();
?>
