

Validation
function uname() {
    var username = document.getElementById("uname").value;
    if (username.length < 6) {
        var e = document.getElementById("ename").innerHTML = "  *Username should be at least 6 characters";
        return false;
    }
    else if (username.search(/[0-9]/) != -1) {
        //  alert("Name field cannot have numbers");
        document.getElementById("ename").innerHTML =
          "Name field cannot have numbers";
        return false;
    }
    else return true;
}

function pass() {
    var check = document.getElementById("pass").value;

    if (check.length < 8) {
        document.getElementById("epass").innerHTML = "  *Password length should be 8 characters";
        return false;
    }
    else return true;
}

function validate() {
    if (uname() && pass()) {
        // alert("Login sucessful..!!");
        return true;
    }
    else {
        return false;
    }

}

//Login Page Redirect
// function pageRedirect() {
//     const name = document.getElementById('uname').value;

//     if (name.charAt(0) == 'S' || name.charAt(0) == 's') {
//         document.login.action = "student.html";
//     }

//     if (name.charAt(0) == 'T' || name.charAt(0) == 't') {
//         document.login.action = "teacher.html";
//     }

//     if (name.charAt(0) == 'A' || name.charAt(0) == 'a') {
//         document.login.action = "admin.html";
//     }
//     else return "";
