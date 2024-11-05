const number = [1,2,3,];
const allNumber = [...number,4,5,6];

console.log(allNumber);



function sum(...numbers) {
    return numbers.reduce((total, num) => total + num,0);
}
console.log(sum(20,30,50,100,150));
 
// waa ka shEE