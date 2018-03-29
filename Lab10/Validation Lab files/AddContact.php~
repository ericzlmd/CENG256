<html>
<head>
<title>Contacts</title>
</head>
<body>
<h2>Contact</h2>
<?php
	$fname = $_POST['firstname'];
	$lname = $_POST['lastname'];
	$address = $_POST['address'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];

       $db_host="localhost";
       $db_username="testuser";
	$db_passwd="n01098567";
	    
 	$dbc=mysqli_connect('localhost','testuser','n01098567','addressbook')
	 or die ("Could not Connect! \n");

	$sql="INSERT INTO contacts VALUES (NULL,'$fname','$lname','$address','$phone','$email',NULL);";
	
 	echo "Connection established. \n";
	
	$result=mysqli_query($dbc,$sql) or die ("Error Querying Database");

	 mysqli_close();
	
?>
</body>
</html>