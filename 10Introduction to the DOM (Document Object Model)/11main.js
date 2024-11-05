

function changeImage() {

    const image = document.querySelector('#image');

//    const url = prompt("please enter your image url") 

    image.setAttribute('src', 'https://images.unsplash.com/photo-1726165534077-23c397b32d46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D')

    //element.style
    image.style.border = '2px solid  red';
    image.style.padding = "10px";
    // backgroundColor

    image.style.backgroundColor = '#cfc2dc';
}



function changeContentStyle(){

    const header = document.querySelector('#header');
    const text = document.querySelector('.text');

    header.style.color = "skyblue"
    text.style.padding = "20px";
    text.style.border = "1px solid black"
    text.style.fontSize = "30px";
}