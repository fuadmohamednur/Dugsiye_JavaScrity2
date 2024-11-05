function operate(a,b, callback){
    return callback(a,b)
}

function add(a,b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log("Addition", operate(2, 3, add));

console.log("subtration", operate(20, 10, subtract))