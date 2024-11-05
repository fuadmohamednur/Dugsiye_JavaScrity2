function greet(name){
    console.log("Hello, ", name)
}

function proccessUserInput(callback) {
    const name = prompt("Enter your name");
    callback(name)
}
proccessUserInput(greet)