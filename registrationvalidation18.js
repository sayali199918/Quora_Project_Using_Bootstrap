function callvalidation() {
  var user = Registervalidation();
  var pass = passwordvalidation();
  var email = emailvalidation();

  if (user == false || pass == false || email == false) {
    return false;
  } else {
    return true;
  }
}

function Registervalidation() {
  var id = document.getElementById("UName").value;

  if (id.trim() == "") {
    // alert("Please Enter username values");
    document.getElementById("UiNvalid").innerHTML = "please enter Username";
    return false;
  } else if (id.search(/[0-9]/) != -1) {
    //  alert("Name field cannot have numbers");
    document.getElementById("UiNvalid").innerHTML =
      "Name field cannot have numbers";
    return false;
  } else if (id.search(/[!\@\#\$\%\^\&\(\)\<\>]/) != -1) {
    // alert("Name field cannot have symbols");
    document.getElementById("UiNvalid").innerHTML =
      "Name field cannot have symbols";
    return false;
  } else {
    return true;
  }
}
function passwordvalidation() {
  var pass = document.getElementById("pwd").value;
  var passC = document.getElementById("pwdC").value;

  if (pass.trim() == "") {
    // alert("Please Enter password values");
    document.getElementById("PassiNvalid").innerHTML = "please enter Password";
    return false;
  } else if (pass.length < 6) {
    // alert("too short password!should greater than 6");
    document.getElementById("PassiNvalid").innerHTML =
      "too short password!should greater than 6";
    return false;
  } else if (pass != passC) {
    // alert("Password does not match");
    document.getElementById("ConfirmiNvalid").innerHTML =
      "Password does not match";
    return false;
  } else if (
    pass.search(/[0-9]/) == -1 ||
    pass.search(/[a-z]/) == -1 ||
    pass.search(/[A-Z]/) == -1 ||
    pass.search(/[!\@\#\$\%\^\&\(\)\<\>]/) == -1
  ) {
    // alert("Enter atleast 1 upper case and 1 lower case charater, 1 symbol and 1 number");
    document.getElementById("PassiNvalid").innerHTML = "please enter password";
    return false;
  } else {
    return true;
  }
}

function emailvalidation() {
  var mail = document.getElementById("email").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-z0-9]+)\.([a-z]+)(.[a-z]{2,8})?$/;
  var temp = regx.test(mail);

  if (mail.trim() == "") {
    // alert("enter email id");
    document.getElementById("EmailiNvalid").innerHTML = "please enter Emali";
    return false;
  } else if (!regx.test(mail)) {
    // alert("invalid email");
    document.getElementById("EmailiNvalid").innerHTML = "Invalid";
    return false;
  } else {
    return true;
  }
}
