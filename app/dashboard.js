let user_display = document.querySelector("table tbody");

var table_info = document.querySelector("#myTable");
var edit_modal = document.querySelector("#studentEditModal");

const url = "../api/dashboardlogic.php";

let output = "";
let userId;

var modal = document.getElementById("editModal");
var editBtn = document.getElementById("edit_user");



function renderUsers(users) {
  if (user_display) {
    for (const user in users) {
      output += `
            <tr data-id = ${users[user].id}>
                <td id="id">${users[user].id}</td>
                <td id="user_name">${users[user].name}</td>
                <td id="user_email">${users[user].email}</td>
                <td id="user_password">${users[user].password}</td>
                <td><img src="${users[user].image}" style="width : 100px; height : 100px; border-radius : 5px"></td>
                <td>
                    <button type="button" value="${users[user].id}>"
                        class="viewUserBtn btn btn-info">View</button>
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

function closeModal(){
    modal.style.display = "none";
}

user_display.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id == "edit_user") {
    userId = e.target.parentNode.parentNode.getAttribute("data-id");
    console.log(e.target.parentNode.getElementById("user_name"));
    //modal.style.display = "block";
    userName = document.getElementById("name");
    userEmail = document.getElementById("email");
    userPass = document.getElementById("pass");
    //userName.innerHTML = e.target.
    //console.log(userId);
  } else if (e.target.id == "delete_user") {
    userId = e.target.parentNode.parentNode.getAttribute("data-id");
    //console.log(userId);
    deleteUser(userId);
  }
});

/*function refreshData() {
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
}*/

/*function reload() {
    var table_info = document.querySelector("#myTable");
    var content = table_info.innerHTML;
    table_info.innerHTML = content
}*/

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
