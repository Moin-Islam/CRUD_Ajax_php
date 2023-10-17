<?php
include("connection.php");

if (isset($_POST['username'])) {
    $name = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * from crudtable WHERE username='$name' and pass='$pass'";

    try {
        $query_run = mysqli_query($conn, $sql);

        if ($query_run) {
            $num_rows = mysqli_num_rows($query_run);
            print_r($num_rows);
            if ($num_rows > 0) {
                echo 'Successfull login';
            } else {
                echo 'Incorrect username and password';
            }
        } else {
            throw new mysqli_sql_exception(mysqli_error($conn));
        }
    } catch (mysqli_sql_exception $e) {
        print_r($e);
        $res = [
            'status' => 500,
            'message' => 'Login up was not Successfully'
        ];
        echo json_encode($res);
        return false;
    }
}



?>