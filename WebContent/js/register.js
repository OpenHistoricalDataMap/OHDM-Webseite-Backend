var checkbox = document.getElementById("privacy-checkbox");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("register-button");
var btnLogIn = document.getElementById("anmelden-button");

// get modal body
var modalBody = document.getElementById("modalBody");

// get email and password fields
var email = document.getElementById("inputLoginEmail");
var password = document.getElementById("inputLoginPassword");


// When the user clicks on the button, open the modal
btn.onclick = function () {
  if (checkbox.checked == false) {
    modalBody.innerHTML = "<p> Bitte erst die Datenschutzerklärung bestätigen! </p>"
    modal.style.display = "block";
  } else {
    modalBody.innerHTML = "<p> Leider noch keine Registrierung möglich... </p>"
    modal.style.display = "block";
  }
}

// for login
btnLogIn.onclick = function () {
 
  if (email.value == "" || password.value == "") {
    modalBody.innerHTML = "<p> Geben Sie Ihren Benutzernamen und Passwort ein! </p>"
    modal.style.display = "block";
  } else {
    modalBody.innerHTML = "<p> Leider noch keine Anmeldung möglich... </p>"
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
function doClose() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}