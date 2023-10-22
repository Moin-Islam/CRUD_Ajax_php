<?php
include("connection.php");
// echo "hello"; die();
$id = mysqli_real_escape_string($conn, $_POST['user_id']);
$name = mysqli_real_escape_string($conn, $_POST['user']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$pass = mysqli_real_escape_string($conn, $_POST['pass']);
$imageFile = $_FILES['image'];
$uploadDir = 'images/';
$uploadFileName = $imageFile['name'];

print_r($uploadFileName);



$sql = "UPDATE crudtable SET username = '$name', email = '$email', pass = '$pass', image = '$uploadDir$uploadFileName' WHERE id = '$id'";

try {
    $query_run = mysqli_query($conn, $sql);
    if($query_run)
    {
        $res = array(
            'status' => 200,
            'message' => 'Sign up was Successfully'
        );
        echo json_encode($res);
        return false;
    }else {
        throw new mysqli_sql_exception(mysqli_error($conn));
    }
}catch(mysqli_sql_exception $err) {
    print_r($err);
    $res = array(
        'status' => 500,
        'message' => 'Sign up was not Successfully'
    );
    echo json_encode($res);
    return false;
}
