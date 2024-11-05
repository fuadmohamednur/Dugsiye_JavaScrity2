function changeImage(){

    const image = document.querySelector('#image');

    const url = prompt("please enter your image url")

    image.setAttribute('src',url)
}