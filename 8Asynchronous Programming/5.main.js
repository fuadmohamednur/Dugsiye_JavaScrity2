function fetchUserData() {
    return new Promise((resolve,reject) =>{
         setTimeout(() => {
          const success = true;
          
          if(success){
            resolve({id: 1, name: "Sucess Massege"})
          }else{
            reject("Falied to fetch user data")
          }
         },2000);
    })
}

fetchUserData()
  .then((data) => console.log("User data", data))
   .catch((err) => console.log(err))
  // console.log(fetchUserData())