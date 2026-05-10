let cart = [];
let total = 0;

function addToCart(name, price){

  let item = cart.find(i => i.name === name);

  if(item){
    item.qty += 1;
  }else{
    cart.push({name, price, qty:1});
  }

  total += price;

  updateCart();
}

function updateCart(){

  let cartDiv = document.getElementById("cartitems");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <p>
        ${item.name} x${item.qty} = ${item.price * item.qty}
      </p>
    `;
  });

  document.getElementById("total").innerText = total;

}

function placeOrder(){

  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  let bill = "🧾 ORDER BILL\n\n";

  cart.forEach((item, i) => {
    bill += `${i+1}. ${item.name} x${item.qty} = ${item.price * item.qty}\n`;
  });

  bill += `\nTOTAL: ${total}`;
  bill += `\n\nOrder Placed Successfully 🎉`;

  alert(bill);

  // reset cart
  cart = [];
  total = 0;
  updateCart();
}
function placeOrder(){
  a(Order);
  
}





function placeOrder(){

  let bill = "";

  cart.forEach((item, i) => {
    bill += `${i+1}. ${item.name} x${item.qty} = ${item.price * item.qty}\n`;
  });

  bill += `\nTOTAL ITEMS: ${cart.length}`;
  bill += `\nTOTAL BILL: ${total}`;
  bill += `\n\n✅ Successfully Order Placed! 🎉`;

  alert(bill);
}