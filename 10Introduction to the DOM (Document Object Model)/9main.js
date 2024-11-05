const list = document.querySelector('#list');


function addItem(){

    const newItem = document.querySelector('li')

    newItem.textContent = 'new Item'
    
    newItem.appendChild(newItem)
}



function removeItem(){

   if(list.lastChild){
    list.lastChild(list.lastChild)
   }else{
    alert("saxib waa lagu ka labaxay!")
   }
}