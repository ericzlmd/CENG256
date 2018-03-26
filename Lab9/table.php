<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Lab5.php</title>
</head>
<body>
   <?php
      $value = $_POST['value'];

      for ($i=1; $i < 13; $i++) {
         $product = $value * $i;
         echo "$value x $i is: $product <br>";
      }
   ?>
</body>
</html>