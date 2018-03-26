<?php
   $fname = $_POST['fname'];
   $lname = $_POST['lname'];
   $email = $_POST['email'];

   $server = 'localhost';
   $username = 'testuser';
   $password = 'password';
   $database = 'addressbook';

   // $dbc=mysqli_connect('localhost', 'testuser', 'passwfdasfdasord', 'addressbook') or die("Could not connect! \n");

   $link = mysql_connect('localhost', 'testuser', 'password');
   if (!$link) {
      die('Could not connect: ' . mysql_error());
   }
   
   echo 'Connected successfully';

   mysql_close($link);
   
?>