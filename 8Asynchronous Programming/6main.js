function fetchUserData() {
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
          const success =    false;
          
          if(success){
            resolve({id: 1, name: "john Smh"})
          }else{
            reject("Falied to fetch user data")
          }
         },3000);
    })
}

fetchUserData()
  .then((data) => console.log("User data", data))
   .catch((err) => console.log(err))
  // console.log(fetchUserData())


