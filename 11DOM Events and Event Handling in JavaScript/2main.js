const button = document.querySelector('#myButton');
const removeButton = document.querySelector('#removeButton');

// element.addEventListenner(')

function handlClick (){
    console.log("Buttom Clicked")
}

button.addEventListener('click', handlClick);

removeButton.addEventListener('click',function(){ // click mar lasiiyo removeButton
    button.removeEventListener('click', handlClick); // ka qaada awood clickda
    console.log("Click event removed")
})