

async function fetchData(){
    try{
        console.log("Staring feching data")
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error(`HTPP error! status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

    }catch (error){

    }
}

fetchData()