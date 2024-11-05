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



    error.textContent = "Registered Successfully"
});
