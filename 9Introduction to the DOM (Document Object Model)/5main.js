// const header = document.getElementById('header');

// console.log(header);

// const text = document.getElementsByClassName('text')[1];

// console.log(text)
// const button = document.getElementsByTagName('button')[0];

// console.log(button); 

// By Id
const header = document.querySelector('#header');

console.log(header); 

//By class name
const text = document.querySelector('.text');

console.log(text);

// by tag neme
const button = document.querySelector('button');

console.log(button);

 function changeContent() {
    console.log("ChangeContent called")

    header.textContent = "Wecome to the DOM"
 }

 function changeElemnt() {
    
    text.innerHTML = `Welcome to my website <strong>consider to like my wepsite </strong>` 
 }