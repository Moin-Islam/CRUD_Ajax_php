function nameValidation() {
  let userName = document.querySelector("#name").value;

  if (userName.length < 6) {
    document.querySelector(".usernameError").style.display = "block";
  } else {
    document.querySelector(".usernameError").style.display = "none";
  }
}

function passwordValidation() {
  let userPassword = document.querySelector("#pass").value;

  if (userPassword == "") {
    document.querySelector(".passwordError2").style.display = "block";
  } else {
    console.log(userPassword);
    document.querySelector(".passwordError2").style.display = "none";
  }
}

function submitForm(e, form) {
  e.preventDefault();

  var username = document.getElementById("name").value;
  var password = document.getElementById("pass").value;
  console.log(username,password);
  $.ajax({
    url: "../api/loginlogic.php",
    method: "POST",
    data: {
        'username' : username,
        'password' : password,
    },
    success: function (){
        window.open("dashboard.html", "_self");
    }});
}
