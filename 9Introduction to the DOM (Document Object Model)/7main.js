const list = document.querySelector('#list');

function addItem(){
    //Create a new list item
    
  // <li>Item 3</li>
  const newItem = document.createElement('li');
  // change the content
  newItem.textContent = 'new Item'

  list.appendChild(newItem)
}

function removeItem() {

}