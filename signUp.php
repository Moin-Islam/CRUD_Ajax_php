<?php
include("connection.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="signUp.css">
</head>

<body>
  <div class="wrapper">
    <div class="title"> <span>Sign Up Form</span></div>
    <form action="#" id="input_form">
      <div class="row">
        <input type="text" id="name" name="user" placeholder="Username" onkeyup="nameValidation()">
      </div>
      <div class="usernameError">
        <p>Username must be 6 character</p>
      </div>
      <div class="row">
        <input type="text" id="email" name="email" placeholder="Email" onkeyup="emailValidation()">
      </div>
      <div class="emailError">
        <p>Invalid email address</p>
      </div>
      <div class="row">
        <input type="password" id="pass" name="pass" placeholder="Password" onkeyup="passwordValidation()">
      </div>
      <div class="passwordError">
        <p>Password cann't be same as user name</p>
      </div>
      <div class="passwordError1">
        <p>Password must be at least 6 character</p>
      </div>
      <div class="passwordError2">
        <p>Password required</p>
      </div>
      <div class="row">
        <input type="password" id="confirm-pass" name="cpass" placeholder="Confirm Password" onkeyup="confirmPassValidation()">
      </div>
      <div class="confirmPasswordError">
        <p>Must match password</p>
      </div>
      <div class="card">
        <img src="images/profile.png" id="profile-pic">
        <div class="imageSizeError">
          <p>Image size must be less than 50 KB</p>
        </div>
        <label for="input-file" onclick="updateImage()">Update Image</label>
        <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
      </div>
      <div class="row button">
        <input type="submit" onclick="" value="Sign Up" name="signUp_button">
      </div>
       
    </form>
  </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$("submit").on('click',function(){
  $.ajax({
    url:'http://localhost/CRUD/upSign.php',
    type: 'POST',
    data: $("#input_form").serialize(),
    success: function(response) {

    }
  })
})
</script>
<script src="script.js"></script>
</body>

</html>