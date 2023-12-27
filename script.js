let bagItems;

onLoad();

function onLoad(){
 let bagItemsStr= localStorage.getItem('bagItems');
 bagItems= bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItems();
  displayBagIcon();
}




function displayItems() {
  let itemsContainer = document.querySelector(".items-container");

  let allItems = "";

  if(!itemsContainer){
    return;
  }


  items.forEach((item) => {
    allItems += `
  <div class="item-container">
  <img src="/myntra-clone/${item.image}" alt="item1=image" class="item-image">
  <div class="rating"> 
      ${item.rating.stars} ⭐| ${item.rating.count}

  </div>
  <div class="company-name">
  ${item.company}
  </div>
  <div class="item-name">
  ${item.item_name}
  </div>
  <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% off)</span>
  </div>
  <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>



 </div>`;
  });

itemsContainer.innerHTML = allItems;
}

function addToBag(itemId){
 
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems)); 
  //can't save array in local storage that's why we are using JSON.stringify to convert array into strings
  displayBagIcon();  
  
}

function displayBagIcon(){
  let bagItemCountElement= document.querySelector(".bag-items-count");
  if(bagItems.length > 0){
    bagItemCountElement.style.visibility ="visible";
    bagItemCountElement.innerText = bagItems.length;
    // console.log(bagItems);
    
  }
  else{
    bagItemCountElement.style.visibility ="hidden";
   
  }
  


}