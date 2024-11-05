const fruit = ["Apple","Banana", "Jerry"];

// fruit.forEach((fruit)=> {
//     console.log("I like" + fruit);
// })

// console.log('-----------');

// fruit.forEach(function(fruit,index){
//     console.log("I like"  + fruit + " " + index)
// })


const numbars = [1,2,3,4,5];

const newNumbers = numbars.map((numbar,index)=> numbar *2);

console.log(newNumbers);