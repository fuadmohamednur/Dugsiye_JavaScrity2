const form  = document.querySelector('#registrationForm');


form.addEventListener("submit", function(event){
    
    event.preventDefault();

 const username = document.querySelector('#username').value;
 const email = document.querySelector('#email').value;
 const password = document.querySelector('#password').value;
 const confirmPassword = document.querySelector('#confirmPassword').value;


const error = document.querySelector('#error');

 // username checking

 if(username === ''){
    error.textContent = "Userneme is required"
    return// code-kan meshan ku jooji
 }

 if(password !== confirmPassword) {
    error.textContent = "Password do not match.";
    return
 }


 if(password.length <8) {
    error.textContent = "Password must be at least 8 characters long."
    return
 }


  const emailPlattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!email.match(emailPlattern)){
    error.textContent = "please enter a valid email address"
    return
  }

    error.textContent = "Registered Successfully"
});
