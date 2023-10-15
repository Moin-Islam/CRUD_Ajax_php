/*function getFileSizeInKB(file) {
    return file.size / 1024;
}*/

function updateImage() {
  let profilePic = document.getElementById("profile-pic");
  let inputFile = document.getElementById("input-file");

  let fileSizeInKB;

  inputFile.onchange = function () {
    if (inputFile.files.length > 0)
    {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
        fileSizeInKB = inputFile.files[0].size /1024;
        
        if(fileSizeInKB >50)
        {
            profilePic.src = "images/profile.png";
            document.querySelector(".imageSizeError").style.display = "block";
            console.log(fileSizeInKB);
        }
        else{
            document.querySelector(".imageSizeError").style.display = "none";
            console.log(fileSizeInKB);
        }
    }else {
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
    console.log(userName);
  }
}

function emailValidation() {
  let userEmail = document.querySelector("#email").value;

  if (!userEmail.includes("@")) {
    document.querySelector(".emailError").style.display = "block";
    console.log(userEmail);
  } else {
    document.querySelector(".emailError").style.display = "none";
  }
}

function passwordValidation() {
  let userPassword = document.querySelector("#pass").value;
  let name = document.querySelector("#name").value;
  console.log(userPassword);

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
    console.log(confirmPassword);
    console.log(password);
  }
}
