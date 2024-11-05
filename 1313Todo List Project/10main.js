const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#do-input');
const tidoList = document.querySelector('#todo-list');



document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks(){

  //getting old  tasks form localstorage
 
  const tasks = getTasksFromLocalStorage();
  

  tasks.forEach(task => {
   addTaskToDOM(task)
  })
}
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
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);

        todoInput.value = ""; // input clear ka dhiga
    }
    
    }

    function addTaskToDOM(task){


    const li = document.createElement("li");
    li.className = `todo-item ${task.complered ? "complered" : ""}`;
    li.dataset.id = task.id
        
   
     li.innerHTML = ` <input type="checkbox" class="complete checkbox">
            <span class="task">${task.text}</span>
            <button class="edit-btn">Edut</button>
            <button class="delete-btn">Delete</button>`

           
     tidoList.appendChild(li);

     attachEventListterners(li,task)
    }
    
  function attachEventListterners(li,task){

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){
       handleDelete(task.id,li)
    });


  }

  function handleDelete(id, li){

    let tasks = getTasksFromLocalStorage();

    tasks = tasks.filter(task => task.id != id);
    
    localStorage.setItem('tasks',JSON.stringify(tasks));


    li.remove();// read time remove
  }


    function saveTaskToLocalStorage(task){

        const oldTasks = getTasksFromLocalStorage()
        oldTasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }

    function getTasksFromLocalStorage(){
        const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        return oldTasks;
    }