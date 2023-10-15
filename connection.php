<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$db_name = "crudsystem";

$conn = new mysqli($serverName,$userName,$password,$db_name,3306);

if($conn->connect_error){
    die("Connection failed!".$conn->connect_error);
}
echo "connection succesful!";


?>