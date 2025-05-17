const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirme_Password = document.getElementById("confirmepassword");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (userName.value === "") {
    showError(userName, "User name is required");
  } else {
    showSuccess(userName);
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value === "") {
    showError(email, "email is required");
  } 
  else if(!validateEmail(email.value)){
    showError(email, "Invalied email");
  }
  else {
    showSuccess(email);
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (confirme_Password.value === "") {
    showError(confirme_Password, "confirmePassword is required");
  } else {
    showSuccess(confirme_Password);
  }
});
