var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");
var successtext = document.getElementById("successSMS");
var repeadEmailText = document.getElementById("repeadEmail");
var inValidEmailText = document.getElementById("inValidEmail");
var inValidNameText = document.getElementById("inValidName");
var inValidPassText = document.getElementById("inValidPass");
var requirInputesText = document.getElementById("requirInputes");
var loginErrorText = document.getElementById("loginError");
var users = [];

if (localStorage.getItem("usersContainer") !== null) {
  users = JSON.parse(localStorage.getItem("usersContainer"));
}

function emailExist(email){
    if(localStorage.getItem("usersContainer") !== null){
        for(let i=0; i<users.length; i++){
            if(users[i].email== email){
                return true;
            }
        }
    }

}

function adduser() {
    if (validName() && validEmail() && validPass()) {
        var user = {
            name: userNameInput.value,
            email: userEmailInput.value,
            pass: userPassInput.value
        };
       if(emailExist(user.email)){
            repeadEmailText.classList.remove("d-none");
       }
       else{
        repeadEmailText.classList.add("d-none");
        users.push(user);
        localStorage.setItem("usersContainer", JSON.stringify(users));
        successtext.classList.remove("d-none");
        window.location.href = "./index.html";
       }
       
    }
}

function signIn() {
    let cartona="Welcome ";
    let index=-1;
    let email = userEmailInput.value;
    let pass = userPassInput.value;
    for (var i = 0; i < users.length; i++) {
        if (email == users[i].email && pass == users[i].pass) {
            index= i;
        }
    }
    if(index>-1){
        loginErrorText.classList.add("d-none");
        cartona+= users[index].name;
        //  document.getElementById("contentHome").innerHTML=cartona;
        window.location.href = "./home.html";
     }
     else{
        loginErrorText.classList.remove("d-none");
     }
}

function closePage(){
    window.location.href = "./index.html";
}

function validName() {
    var textName = userNameInput.value;
    var regexName = /^[a-zA-z0-9_]{3,}$/;
    if (textName == "") {
        requirInputesText.classList.remove("d-none");
    }
    else if (regexName.test(textName)) {
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        inValidNameText.classList.add("d-none");
        requirInputesText.classList.add("d-none");
        return true
    }
    else {
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        inValidNameText.classList.remove("d-none");
        requirInputesText.classList.add("d-none");
        return false
    }
}

function validEmail() {
    var textEmail = userEmailInput.value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (textEmail == "") {
        requirInputesText.classList.remove("d-none");
    }
    else if (regexEmail.test(textEmail)) {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        inValidEmailText.classList.add("d-none");
        requirInputesText.classList.add("d-none");
        return true
    }
    else {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        inValidEmailText.classList.remove("d-none");
        requirInputesText.classList.add("d-none");
        return false
    }
}

function validPass() {
    var textPass = userPassInput.value;
    var regexPass = /^[a-zA-z0-9_@-]{8,}$/;
    if (textPass == "") {
        requirInputesText.classList.remove("d-none");
    }
    else if (regexPass.test(textPass)) {
        userPassInput.classList.add("is-valid");
        userPassInput.classList.remove("is-invalid");
        inValidPassText.classList.add("d-none");
        requirInputesText.classList.add("d-none");
        return true
    }
    else {
        userPassInput.classList.add("is-invalid");
        userPassInput.classList.remove("is-valid");
        inValidPassText.classList.remove("d-none");
        requirInputesText.classList.add("d-none");
        return false
    }
}