// const fruit = ["Apple","Banana", "Jerry"];

// fruit.forEach((fruit)=> {
//     console.log("I like" + fruit);
// })

// console.log('-----------');

// fruit.forEach(function(fruit,index){
//     console.log("I like"  + fruit + " " + index)
// })


const numbars = [2.5,3,3];

const newNumbers = numbars.map((numbar,index)=> numbar *2);

console.log(newNumbers);