const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#do-input');
const tidoList = document.querySelector('#todo-list');


// adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

    e.preventDefault();

    const taskText = todoInput.value.trim(); // trim wax u ka hortaagaa spece ka

    // console.log(new Date(Date.now()).getHours())


    if(taskText !== ""){
        const task = {
            id : Date.now(),
            text: taskText,
            completed: false
        }
    }
     addTaskToDOM(task)
    
    }

    function addTaskToDOM(task){



        
    }