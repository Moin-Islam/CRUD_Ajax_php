<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
    <link rel="stylesheet" href="signUp.css">
</head>


<body>
  <div class="wrapper">
    <div class="title"> <span>Login</span></div>
    <form action="#">
      <div class="row">
        <input type="text" id="name" placeholder="Username" onkeyup="nameValidation()">
      </div>
      <div class="usernameError">
        <p>Username must be 6 character</p>
      </div>
      <div class="row">
        <input type="password" id="pass" placeholder="Password" onkeyup="passwordValidation()">
      </div>
      <div class="passwordError2">
        <p>Password required</p>
      </div>
      <div class="row button">
        <input type="submit" onclick="" value="Login">
      </div>
       
    </form>
  </div>
  <script src="script.js"></script>
</body>

</html>