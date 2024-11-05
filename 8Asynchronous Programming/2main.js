

//1000 ms = 1 second
console.log("immediate fetch") 

function getUserData(callback) {

    setTimeout (() => {
        const user = { id: 1, name: "John Smith"}
        callback(user);
    }, 3000)
    
}

console.log("Starting to fetch user data");

getUserData(function (user) {
    console.log(user)
});

console.log("This message shows up immediately")

