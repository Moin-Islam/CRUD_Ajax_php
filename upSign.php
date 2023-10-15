<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$db_name = "crudsystem";

$connect = mysqli_connect($serverName,$userName,$password,$db_name);

$name = mysqli_real_escape_string($connect, $_POST['name']);
$email = mysqli_real_escape_string($connect, $_POST['email']);
$pass = mysqli_real_escape_string($connect, $_POST['pass']);

$sql = "INSERT INTO crudtable(username, email, pass) VALUES ('$name','$email','$pass')";
mysqli_query($connect, $sql);
?>