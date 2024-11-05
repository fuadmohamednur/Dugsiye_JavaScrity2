const form  = document.querySelector('#registrationForm');



 const username = document.querySelector('#username');
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const confirmPassword = document.querySelector('#confirmPassword');


const error = document.querySelector('#error');
const seccuss = document.querySelector('#seccuss');

form.addEventListener("submit", function(event){  
    event.preventDefault()

    error.textContent ="";
    seccuss.textContent ="";
  
    // Validate fieds

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();

    if(!isUsernameValid){
        username.focus();
        return
    }else if(!isEmailValid){
        email.focus();
        return
    }

    seccuss.textContent = "Registered SuccessFully!";


})

function validateUsername(){

    if(username.value == ''){
        // error
        setError(username,'Username is required');
        return false
    }else{
        // seccuss
        setSeccuss(username);
        return true
    }
}

function  validateEmail(){

    const emailPatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if(!email.value.match(emailPatten)){
        setError(email, "please enter a valid email address")
    }else{
        setSeccuss(email)
        return true
    }
}

function setError(element, message){
    // show error class
    element.classList.add('invalid')
    // hide seccuss class
    element.classList.remove('valid')
    error.textContent = message;

}
 
function setSeccuss(element){
    // seccuss class show
    element.classList.add('valid')
    // hide error class
    element.classList.remove('invalid')


}