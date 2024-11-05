// async function fetchData() {

//     console.log("Start feching data");

//     const response = await fetch('./10data.json');

//     const data = await response.json();

//     console.log("response: " , data)
// }
// fetchData();

async function fetchData (){
  console.log("Start feching data");
  const response = await fetch('./10data.json');
  const data = await response.json();
  console.log("response ", data)
}

fetchData();