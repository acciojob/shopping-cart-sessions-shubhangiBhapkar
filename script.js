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

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${product.name} - ₹${product.price}
      <button 
        class="add-to-cart-btn" 
        onclick="addToCart(${product.id})"
        data-id="${product.id}">
        Add to Cart
      </button>
    `;

    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartUl.innerHTML = "";

  const currentCart = sessionStorage.getItem("cart");
  const cartList = currentCart ? JSON.parse(currentCart) : [];

  cartList.forEach((product) => {
    const li = document.createElement("li");

    li.textContent = `${product.name} - ₹${product.price}`;

    cartUl.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const selectedProduct = products.find(
    product => product.id == productId
  );

  let currentCart = sessionStorage.getItem("cart");
  const cartList = currentCart ? JSON.parse(currentCart) : [];

  cartList.push(selectedProduct);

  sessionStorage.setItem("cart", JSON.stringify(cartList));

  // Update UI immediately
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  let currentCart = sessionStorage.getItem("cart");
  const cartList = currentCart ? JSON.parse(currentCart) : [];

  const updatedCart = cartList.filter(
    product => product.id != productId
  );

  sessionStorage.setItem("cart", JSON.stringify(updatedCart));

  renderCart();
}

// Clear cart
function clearCart() {
  sessionStorage.removeItem("cart");
  cartUl.innerHTML = "";
}

// Initial render
renderProducts();
renderCart();