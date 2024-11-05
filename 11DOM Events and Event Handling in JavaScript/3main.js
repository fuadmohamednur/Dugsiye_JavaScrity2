const colorSelect = document.querySelector('#color');
const selectedColor = document.querySelector('#selectedColor');

const username = document.querySelector('#username');
const currentUsername = document.querySelector('#currentUsername');


colorSelect.addEventListener("change", function(){
     console.log("change to", colorSelect.value)
     selectedColor.textContent = `selected Color ${colorSelect.value}`
})

username.addEventListener("change", function(){
    console.log("current username is: ", username.value)
    currentUsername.textContent = `current username ${ username.value}`
})