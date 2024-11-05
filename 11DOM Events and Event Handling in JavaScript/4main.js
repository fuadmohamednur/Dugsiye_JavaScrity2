const form = document.querySelector('#myForm');

const forMessage = document.querySelector('#forMessage');

form.addEventListener('submit',function(event){

    event.preventDefault(); // refereshaka u sameenooyo ka hor istaag

   forMessage.textContent = "Form Submission prevented."
} )