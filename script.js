// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render product list
function renderProducts() {
  
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	// const showCart = document.createElement("div");
	// showcart.innerHTML = sessionStorage.getItem()
	
}

// Add item to cart
function addToCart(productId) {
    console.log("product added in cart", productId);

    const selectedProduct = products.find(
        product => product.id == productId
    );

    cart.push(selectedProduct);
    console.log(cart);
    window.sessionStorage.setItem("cart", JSON.stringify(cart));

    console.log(selectedProduct.name);
    console.log(selectedProduct.price);

    let prodObj = {
        Name: selectedProduct.name,
        Price: selectedProduct.price
    };
    sessionStorage.setItem("cart", JSON.stringify(prodObj));
}
// Remove item from cart
function removeFromCart(productId) {
  console.log("removing item from cart..");
	sessionStorage.removeItem("cart");
}

// Clear cart
function clearCart() {
	sessionStorage.clear();
}

// Initial render
renderProducts();
renderCart();
