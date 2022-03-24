const form = document.getElementById("signUp");
const username = document.getElementById('nameUp');
const number = document.getElementById("numberUp");
const email = document.getElementById('mailUp');
const password = document.getElementById('passwordUp');
const password2 = document.getElementById('passwordUp2');
const submitSignUp = document.getElementById('signUpBtn');

// $("#signUpBtn").click(function(e){
//   e.preventDefault();
//   validateFormData();

// });

submitSignUp.addEventListener('click', e => {
  e.preventDefault();

  validateInputs();
  
  
  
});


let pass1 = document.getElementById("password");
let pass2 = document.getElementById("passwordUp");
let pass3 = document.getElementById("passwordUp2");

let eye1 = document.getElementById("togglePassword0");
let eye2 = document.getElementById("togglePassword1");
let eye3 = document.getElementById("togglePassword2");


function checkPassword(b,a){
  if(b.type == "text"){
    b.type = "password";
    a.classList.toggle("bi-eye");
  }
  else{
    b.type = "text"; 
    a.classList.toggle("bi-eye");
  }

  
}
eye1.addEventListener("click",()=>{
 checkPassword(pass1,eye1);
});
eye3.addEventListener("click", function(){
  checkPassword(pass3,eye3);
});
eye2.addEventListener("click",function(){
  checkPassword(pass2,eye2);
});

$(".signUp").click(function(){

  $(".sign-up").toggle();
  $(".sign-in").toggle();
  
  

});

$("#signInBtn2").click(function(){

  
  $(".sign-up").toggle();
  $(".sign-in").toggle();
  window.location.reload();

});
const reset = ()=>{
  
  document.querySelector("signUp").reset();
  document.querySelector("signIn").reset();

}

$("#signIn").submit(function(e){
  e.preventDefault();

  loginValidation();

})



const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === '') {
      setError(username, 'Username is required');
  } else {
      setSuccess(username);
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }

  if(passwordValue === '') {
      setError(password, 'Password is required');
  } else if (passwordValue.length < 8 ) {
      setError(password, 'Password must be at least 8 character.')
  } else {
      setSuccess(password);
  }

  if(password2Value === '') {
      setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords doesn't match");
  } else {
      setSuccess(password2);
  }

  

};

const loginValidation = ()=>{
    let loginMail = $("#mail").val();
    let loginPass = $("#password").val();
  
    if(loginMail == "" || loginPass == ""){
      $("#loginerr").removeClass("d-none");
  
    }
    else{
      //directs to the page matching the input passwords and email

      redirectPage();
    }
  }



  const redirectPage = ()=>{

    let check = document.getElementById("iamAVet")
    if(check.checked == true){
      document.location.href = "../index.html";   

    }
    else{
      window.location.href = "../index.html";
      $("#theName").text(addedName);
    }
  }