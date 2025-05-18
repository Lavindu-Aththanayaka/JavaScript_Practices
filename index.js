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

//This is s a very long structure
/*form.addEventListener("submit", function (e) {
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
});*/

//Effective structure
function getuppercase(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkPassword(input1,input2){
if(input1.value!==input2.value){
  showError(input2,"Confirmed pasword is not match")
}
}
function checkRequired(inputArr) {
  inputArr.forEach(function(input){
  if (input.value === "") {
    showError(input, `${getuppercase(input)} is required`);
  } else {
    showSuccess(input);
  }});
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([userName, email, password, confirme_Password]);
  checkPassword(password,confirme_Password);
});
