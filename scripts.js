document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('ecommerce-page').style.display = 'block';
    } else {
        document.getElementById('login-error').textContent = 'Invalid credentials. Please try again.';
    }
});

const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeButton = document.getElementById('close-button');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');

let cart = [];

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" class="cart-item-image"> ${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
}

document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const name = productItem.querySelector('h4').textContent;
        const price = productItem.querySelector('p').textContent.replace('$', '');
        const image = productItem.querySelector('img').src;
        
        const item = { name, price, image };
        cart.push(item);
        updateCart();
    });
});

cartIcon.addEventListener('click', function() {
    cartModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
});

const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', function() {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll('.product-item').forEach(product => {
        const productName = product.querySelector('h4').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

function showSection(sectionId) {
    // Hide all product grids
    document.querySelectorAll('.product-grid').forEach(function(section) {
        section.classList.remove('show');
    });

    // Show the selected product grid
    document.getElementById(sectionId).classList.add('show');
}


let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showNextSlide, 2000);

    // Select all buttons with class addToCartButton
    var addToCartButtons = document.querySelectorAll('.addToCartButton');
    var cartMessages = document.querySelectorAll('.cartMessage');

    // Loop through each button to add click event listener
    addToCartButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Show the corresponding cart message
            cartMessages[index].style.display = 'block';

            // Optionally, hide the message after a few seconds
            setTimeout(function() {
                cartMessages[index].style.display = 'none';
            }, 3000); // 3 seconds
        });
    });