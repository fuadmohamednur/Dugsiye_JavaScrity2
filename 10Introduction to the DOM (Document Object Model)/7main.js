const list = document.querySelector('#list');


function addItem(){

   //create a new list item

   //<li>item</li>
   const newItem = document.createElement('li');
   // change the content
   newItem .textContent = 'new Item'

   list.appendChild(newItem) // itemka u hessto wwaxad ku si dawaxertaa waxa soo socdo item
}

function removeItem() {

}