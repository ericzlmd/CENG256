<html>
<head>
<title>View Contacts</title>
</head>
<body>
<h2>View Contacts</h2>
<?php
	  $db_host="localhost";
       $db_username="testuser";
	$db_passwd="n01098567";
	    
 	$dbc=mysqli_connect('localhost','testuser','n01098567','addressbook')
	 or die ("Could not Connect! \n");

	$sql="SELECT * from contacts;";
	
 	echo "Connection established. \n";
	
	$result=mysqli_query($dbc,$sql) or die ("Error Querying Database");
	
	while($row=mysqli_fetch_array($result)){
		echo $row['fname'].' '.$row['lname'].'<br/>';
	}
	
	 mysqli_close();
?>
</body>
</html>