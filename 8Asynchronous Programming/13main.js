function operate(a,b, callback){
    return callback(a,b)
}
function multply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
console.log("multply", operate(5,2, multply));
console.log("divide", operate(20,5, divide));