const user = {
    id: 1,
    name: "Alice",
    name: "Wonderland",
}

// object to json
// json to object

console.log(user)

const jsonString = JSON.stringify(user);
console.log(jsonString)

const perseDate = JSON.parse(jsonString);

console.log(perseDate);