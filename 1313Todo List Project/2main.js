const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#do-input');
const tidoList = document.querySelector('#todo-list');


// adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

    e.preventDefault();

    console.log("hee");
}