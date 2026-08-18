const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartUl = document.getElementById("cart-list");
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
  cartUl.innerHTML="";
  let currentCart = sessionStorage.getItem('cart');
  const cartlist = currentCart ? JSON.parse(currentCart) :[];
  console.log(cartlist)
  cartlist.forEach(product => {
    const li = document.createElement("li");
    li.textContent += `${product.Name} - ₹${product.Price}`;
    cartUl.appendChild(li);
});
}

// Add item to cart
function addToCart(productId) {
    

    const selectedProduct = products.find(
        product => product.id == productId
    );
    

    let currentCart = sessionStorage.getItem('cart');

    const cartlist = currentCart ?JSON.parse(currentCart) :[];
    let prodObj = {
        Name: selectedProduct.name,
        Price: selectedProduct.price
    };
    cartlist.push(prodObj);
    sessionStorage.setItem('cart', JSON.stringify(cartlist));
    renderCart();
    
   
}
// Remove item from cart
function removeFromCart(productId) {
  
	sessionStorage.removeItem("cart");
  
}

// Clear cart
function clearCart() {
	sessionStorage.clear();
  cartUl.innerHTML="";
}

// Initial render
renderProducts();
renderCart();
