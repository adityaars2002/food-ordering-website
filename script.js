let cart = [];

function addToCart(item) {
    cart.push(item);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item + " ";
        cartList.appendChild(li);
    });
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart.");
    } else {
        alert("Thank you for your order!");
        cart = [];
        displayCart();
    }
}
