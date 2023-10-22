let user_display = document.querySelector("table tbody");

var table_info = document.querySelector("#myTable");

const modal = document.querySelector(".modal");
const dialog = document.getElementById("dialog");

const url = "../api/dashboardlogic.php";

let output = "";
let userId;

function renderUsers(users) {
  if (user_display) {
    for (const user in users) {
      output += `
            <tr data-id = ${users[user].id}>
                <td id="id">${users[user].id}</td>
                <td id="user_name">${users[user].name}</td>
                <td id="user_email">${users[user].email}</td>
                <td id="user_password">${users[user].password}</td>
                <td><img id="user_image" src="${users[user].image}" style="width : 100px; height : 100px; border-radius : 5px"></td>
                <td>
                    <button id="edit_user" type="button" value="${users[user].id}"
                        class="editUserBtn btn btn-success" >Edit</button>
                    <button id="delete_user" type="button" value="${users[user].id}"
                        class="deleteUserBtn btn btn-danger">Delete</button>
                </td>
            </tr>
            `;
      user_display.innerHTML = output;
    }
  } else {
    console.log("it doesn't");
  }
}

fetch(url).then((response) => {
  response.json().then((data) => {
    if (Array.isArray(data)) {
      console.log(data, "ggg");
      renderUsers(data);
    } else {
      console.log("not an array");
    }
  });
  // console.log( JSON.parse(data),"aaaaa");
});

user_display.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "edit_user") {
    userId = e.target.parentNode.parentNode.getAttribute("data-id");
    //
    const row = document.querySelector(`[data-id="${userId}"]`);
    const name = row.querySelector("#user_name").textContent;
    const email = row.querySelector("#user_email").textContent;
    const password = row.querySelector("#user_password").textContent;
    const image = document.querySelector("#user_image").getAttribute("src");
    window.location.href = `edit-user.html?user_id=${userId}&name=${name}&email=${email}&password=${password}&image=${image}`;
    console.log(name,email,password,image);
  } else if (e.target.id == "delete_user") {
    userId = e.target.parentNode.parentNode.getAttribute("data-id");
    //console.log(userId);
    deleteUser(userId);
  }
});

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

function deleteUser(id) {
  console.log(id);
  $.ajax({
    type: "POST",
    url: "../api/dashboardactions.php",
    data: {
      delete_user: true,
      user_id: id,
    },
    success: function (response) {
      var res = jQuery.parseJSON(response);
      if (res.status == 500) {
        alert(res.message);
      } else {
        //refreshData();
        location.reload();
      }
    },
  });
}
