// const header = document.getElementById('header');

// console.log(header);

// const text = document.getElementsByClassName('text');

// console.log(text)

// const button = document.getElementsByTagName('button')[1];

// console.log(button)

// by Id
const header = document.querySelector('#header');

console.log(header);


// By Class
const text = document.querySelector('.text');

console.log(text);


function changeContent() {
    header.textContent = "Welcome to the DOM"
}

function changeElement(){
    text.innerHTML = `Hi Welcome to my website <strong>consider to like my website </strong>`
}