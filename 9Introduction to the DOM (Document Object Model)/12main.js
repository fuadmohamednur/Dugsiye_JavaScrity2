
function changeImage(){
    const image = document.querySelector('#image')

    // const url = prompt("Please enter your image url")
    image.setAttribute('src','https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D')


    //element.style.

    image.style.border = '2px solid red';
    image.style.padding = "10px"
    image.style.backgroundColor = '#cfc2dc';
   } 

   function changeContentStyle(){

    const header = document.querySelector("#header");
    const text = document.querySelector('.text');

    header.style.color = "skyblue";
    text.style.padding  = "20px";
    text.style.border = "1px solid black";
    text.style.fontSize = "30px";
   }

   function setligtMode() {
   
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
   }

   function setdarkMode(){

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
   }