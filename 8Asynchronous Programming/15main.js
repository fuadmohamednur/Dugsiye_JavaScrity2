// async function postData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Posted data:", data);
//     } catch (error) {
//         console.error("Error posting data:", error);
//     }
// }

// postData();


async function postData () {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                title: "what this is the body of the post",
                body: "body this is the body of the post",
                userId: 1
            })
        })
        if(!response.ok){
            throw new Error (`HTTP error: ${response.status}`)
        }

        //waxa xiga
        console.log("before json respose", response);
        const data = await response.json();
        console.log("after json response". data);

    }catch(error){
        console.log(error)
    }
}

postData();