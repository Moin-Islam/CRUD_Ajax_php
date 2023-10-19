<?php
include("connection.php");

if (isset($_POST['delete_user'])) {
    try {
        $user_id = mysqli_real_escape_string($conn, $_POST['user_id']);
        $query ="DELETE FROM crudtable WHERE id='$user_id'";
        $query_run = mysqli_query($conn,$query);

        if ($query_run) {
            $res = [
                'status' => 200,
                'message' => 'Student Deleted Successfully'
            ];
            echo json_encode($res);
            return false;
        } else {
            $res = [
                'status' => 500,
                'message' => 'Student Not Deleted'
            ];
            echo json_encode($res);
            return false;
        }
          
    }
    catch(err){
        print_r("errr");
    }
}