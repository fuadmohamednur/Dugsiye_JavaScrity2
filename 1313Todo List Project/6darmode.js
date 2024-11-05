const toggleBettun = document.querySelector("#mode-toggle");

toggleBettun.addEventListener("click", switchMode);

function switchMode(){

    document.body.classList.toggle("dark-mode");  
    toggleBettun.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        toggleBettun.textContent = "Toggle Light Mode";

        localStorage.setItem("mode", "dark");

    }else{
        toggleBettun.textContent = "Toggle dark Mode"; 
        localStorage.setItem("mode", "light")

    }
}