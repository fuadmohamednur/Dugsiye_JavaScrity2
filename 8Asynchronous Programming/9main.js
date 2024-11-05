async function fetchData() {

    console.log("Start feching data");

    const response = await fetch('./data.json');

    const data = await response.json();

    console.log("response: " , data)
}
fetchData();




// async function fetchData() {

//     console.log("Start feching data");

//     // const response = await fetch('./data.json');

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json();

//     console.log("response: " , data[0].title)
// }
// fetchData();
