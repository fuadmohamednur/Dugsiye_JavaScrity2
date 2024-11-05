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

        // adding to the dom
        addTaskToDOM(task)

        todoInput.value = ""; // input clear ka dhiga
    }
    
    }

    function addTaskToDOM(task){


    const li = document.createElement("li");
    li.className = `todo-item`;
    li.dataset.id = task.id
        
   
     li.innerHTML = ` <input type="checkbox" class="complete checkbox">
            <span class="task">${task.text}</span>
            <button class="edit-btn">Edut</button>
            <button class="delete-btn">Delete</button>`

           
     tidoList.appendChild(li);
    }