const userId = new URLSearchParams(window.location.search).get("user_id");
const userName = new URLSearchParams(window.location.search).get("name");
const email = new URLSearchParams(window.location.search).get("email");
const password = new URLSearchParams(window.location.search).get("password");
const image = new URLSearchParams(window.location.search).get("image");

const nameField =document.querySelector("#name");
const emailField =document.querySelector("#email");
const passwordField =document.querySelector("#pass");
const imageField =document.querySelector("#profile-pic");

nameField.value = userName;
emailField.value = email;
passwordField.value = password;
imageField.src = image;
document.querySelector("#confirm-pass").value = password;


// document.querySelector("#name").value = userName;
// document.querySelector("#email").value = email;
// document.querySelector("#pass").value = password;
// document.querySelector("#confirm-pass").value = password;
// document.querySelector("#profile-pic").src = image;



function updateImage() {
  let profilePic = document.getElementById("profile-pic");
  let inputFile = document.getElementById("input-file");

  let fileSizeInKB;

  inputFile.onchange = function () {
    if (inputFile.files.length > 0) {
      profilePic.src = URL.createObjectURL(inputFile.files[0]);
      fileSizeInKB = inputFile.files[0].size / 1024;

      if (fileSizeInKB > 50) {
        profilePic.src = "images/profile.png";
        document.querySelector(".imageSizeError").style.display = "block";
        console.log(fileSizeInKB);
      } else {
        document.querySelector(".imageSizeError").style.display = "none";
        console.log(fileSizeInKB);
      }
    } else {
      alert("Please upload an image");
    }
  };
  console.log(fileSizeInKB);
}

function nameValidation() {
  let userName = document.querySelector("#name").value;

  if (userName.length < 6) {
    document.querySelector(".usernameError").style.display = "block";
  } else {
    document.querySelector(".usernameError").style.display = "none";
  }
}

function emailValidation() {
  let userEmail = document.querySelector("#email").value;

  if (!userEmail.includes("@")) {
    document.querySelector(".emailError").style.display = "block";
  } else {
    document.querySelector(".emailError").style.display = "none";
  }
}

function passwordValidation() {
  let userPassword = document.querySelector("#pass").value;
  let name = document.querySelector("#name").value;

  if (userPassword == "") {
    document.querySelector(".passwordError2").style.display = "block";
  } else if (userPassword.length < 6) {
    document.querySelector(".passwordError1").style.display = "block";
    document.querySelector(".passwordError2").style.display = "none";
    document.querySelector(".passwordError").style.display = "none";
  } else if (userPassword == name) {
    document.querySelector(".passwordError").style.display = "block";
    document.querySelector(".passwordError1").style.display = "none";
    document.querySelector(".passwordError2").style.display = "none";
  } else {
    console.log(userPassword);
    document.querySelector(".passwordError").style.display = "none";
    document.querySelector(".passwordError1").style.display = "none";
    document.querySelector(".passwordError2").style.display = "none";
  }
}

function confirmPassValidation() {
  let password = document.querySelector("#pass").value;
  let confirmPassword = document.querySelector("#confirm-pass").value;

  if (confirmPassword != password) {
    document.querySelector(".confirmPasswordError").style.display = "block";
  } else {
    document.querySelector(".confirmPasswordError").style.display = "none";
  }
}

function submitForm(e, form) {
    e.preventDefault();
  
    const imageFile = document.getElementById("input-file").files[0];
    var form = document.getElementById("input_form");
    var formData = new FormData(form);
    console.log(imageFile);
    formData.append("image", imageFile);
    formData.append("user_id", userId);
    //console.log(formData);
    // For this method we have to set data process data false and content type false to pass the formdata in POST request
    $.ajax({
      url: "../api/updateinfo.php",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function () {
       /* var res = JSON.parse(response);
        console.log(res);
        if (res.status == 500) {
          alert(res.message);
        } else if (res.status == 200) {
          alert(res.message); 
        }*/
        window.open("dashboard.html", "_self");
      },
    });
  }
