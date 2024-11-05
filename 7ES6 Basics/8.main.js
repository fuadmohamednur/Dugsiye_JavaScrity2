// spreed operator

const numbers = [1,2,3,];

const allNumbers = [...numbers, 5,10,80];
console.log(allNumbers);

// rest operator

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num,0);
}
console.log(sum(20,30,50,100,150));

function sun(...numbers) {
    return numbers.reduce((total,num) =>
        total + num,0);
}