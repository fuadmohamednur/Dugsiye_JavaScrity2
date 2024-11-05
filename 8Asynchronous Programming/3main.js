

// function fetchUserDataSync(){
//     alert()
//     return{id: 1, name: "xasan"}
// }

// console.log("Starting fetchong user data")
// const user = fetchUserDataSync();
// console.log("user data", user);
// console.log("wuu  soo dahay ardaga");




// function getUserData(callback) {
//     setTimeout (()=> {
//         const userData = {id: 1, name: "John Doe" }
//         callback(userData);
//     },3000);
// }
// console.log("Starting to fetch user data...");
// getUserData(function(user){
//    console.log("Here is the user data:", user);
// });
// console.log("This message shows up immediately.");

function getUserData(callback){
    setTimeout(()=>{
        const userData = {id: 1, name:"xasan"}
        callback(userData);
    },2000)
}
console.log("Starting to fetch user data...")
getUserData(function(user){
    console.log("Here is the user data:", user);
    console.log("This message shows up immediately.")
})