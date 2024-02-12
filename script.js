// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Send email
  const mailtoLink = `mailto:info@farmyard.com?subject=Message from ${name}&body=${message}`;
  window.location.href = mailtoLink;
  
  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});


// Initialize shopping cart
let cart = [];

// Get the order form element
let orderForm = document.querySelector('#order-form form');

// Add an event listener to the form submit button
orderForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the user's input values
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let product = document.querySelector('#product').value;
  let quantity = parseInt(document.querySelector('#quantity').value);
  let comments = document.querySelector('#comments').value;
  
  // Create an order object
  let order = {
    name: name,
    email: email,
    product: product,
    quantity: quantity,
    comments: comments
  };
  
  // Add the order to the shopping cart
  cart.push(order);
  
  // Clear the form
  orderForm.reset();
  
  // Notify the user that their order has been added to the cart
  alert(`${product} x ${quantity} added to cart!`);
});
// Get the cart button and count elements
let cartButton = document.querySelector('#cart-button');
let cartCount = document.querySelector('#cart-count');

// Add an event listener to the cart button
cartButton.addEventListener('click', function() 
{
  // Display a list of the items in the cart
  let cartItems = '';
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    cartItems += `${item.quantity}x ${item.product}<br>`;
  }
  if (cart.length == 0) {
    cartItems = 'Your cart is empty';
  }
  alert(cartItems);
  
  // Update the cart count
  cartCount.innerText = cart.length;
}
);
// Display product details
const products = document.querySelectorAll('.product');

products.forEach((product) => {
  const detailsBtn = product.querySelector('.details-btn');
  const closeBtn = product.querySelector('.close-btn');
  const detailsModal = product.querySelector('.details-modal');

  detailsBtn.addEventListener('click', () => {
    detailsModal.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    detailsModal.classList.remove('open');
  });
});

// Filter products by category
const categoryBtns = document.querySelectorAll('.category-btn');
const productsContainer = document.querySelector('.products-container');

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    productsContainer.setAttribute('data-category', category);
  });
});

// Google Map
function initMap() {
  const farmyard = { lat: 40.712776, lng: -74.005974 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: farmyard,
  });
  const marker = new google.maps.Marker({
    position: farmyard,
    map: map,
  });
}
// Update cart icon with number of items in cart
function updateCartIcon() {
  const cartIcon = document.querySelector('.cart-icon');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length > 0) {
    cartIcon.textContent = cart.length;
    cartIcon.classList.add('has-items');
  } else {
    cartIcon.textContent = '';
    cartIcon.classList.remove('has-items');
  }
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartIcon(); // Update cart icon with number of items
}


function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartIcon(); // Update cart icon with number of items
}
// Toggle cart visibility
function toggleCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Create cart item list
  const cartItemList = document.createElement('ul');
  cartItemList.classList.add('cart-item-list');

  cart.forEach(product => {
    const cartItem = document.createElement('li');
    cartItem.textContent = product.name;
    cartItemList.appendChild(cartItem);
  });

  // Show/hide cart
  const cartDropdown = document.querySelector('.cart-dropdown');
  cartDropdown.classList.toggle('show');

  // Add cart items to dropdown
  cartDropdown.innerHTML = '';
  cartDropdown.appendChild(cartItemList);
}
// Add product to cart
function addToCart(productId) {
  // Get the product information (name, price, etc.) using the productId
  // Add the product to the cart object
  // Update the cart icon in the header to show the number of items in the cart
  // Display a success message to the user
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartIcon(); // Update cart icon with number of items
}

// Toggle cart visibility
function toggleCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Create cart item list
  const cartItemList = document.createElement('ul');
  cartItemList.classList.add('cart-item-list');

  cart.forEach(product => {
    const cartItem = document.createElement('li');
    cartItem.textContent = product.name;
    cartItemList.appendChild(cartItem);
  });

  // Show/hide cart
  const cartDropdown = document.querySelector('.cart-dropdown');
  cartDropdown.classList.toggle('show');

  // Add cart items to dropdown
  cartDropdown.innerHTML = '';
  cartDropdown.appendChild(cartItemList);
}

// Update cart icon with number of items
function updateCartIcon() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartIcon = document.querySelector('.cart-icon');
  const cartItemCount = document.querySelector('.cart-item-count');
  cartIcon.classList.add('has-items');
  cartItemCount.textContent = cart.length;
}

// Add event listeners
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      id: button.dataset.productId,
      name: button.dataset.productName,
      price: button.dataset.productPrice,
    };
    addToCart(product);
  });
});

const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', toggleCart);
// Get the form element
const checkoutForm = document.getElementById('checkout-form');

// Add event listener for form submission
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform any client-side validation here
  
  // If the form is valid, submit the form to the server
  submitForm();
});

