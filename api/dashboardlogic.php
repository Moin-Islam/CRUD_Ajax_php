<?php
include("connection.php");

$query = "SELECT * FROM crudtable";

try {
    $query_run = mysqli_query($conn, $query);

    if ($query_run) {
        $data = mysqli_fetch_all($query_run);
        $object = array_map(function ($row) {
            return [
                'id' => $row[0],
                'name' => $row[1],
                'email' => $row[2],
                'password' => $row[3],
                'image' => $row[4],
            ];
        }, $data);
        //print_r($object);
        echo json_encode($object);
    }
    die();
} catch (err) {
    print_r("Connection Error");
}

/*if (isset($_POST['delete_user'])) {
    try {
        $user_id = mysqli_real_escape_string($conn, $_POST['user_id']);
        $query ="DELETE FROM crudtable WHERE id='$user_id'";
        $query_run = mysqli_query($conn,$query);
          
    }
}*/