$(document).ready(function () {
    $('#myCarousel').owlCarousel({
      items: 3, 
      loop: true, 
      margin: 20,
      nav: true, 
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ], 
      responsive: {
        0: {
          items: 1, 
        },
        768: {
          items: 2, 
        },
        992: {
          items: 3, 
      },
    },
  });
});


function sendMessage() {
  var message = document.getElementById('message-input').value;
    if (message.trim() !== '') {
      var chatBox = document.getElementById('chat-box');
      chatBox.innerHTML += `
        <div class="user-message">
          <img src="img/member.png" id="user-profile" alt="User Profile">
          <p><strong>You:</strong> ${message}</p>
        </div>`;
    
      setTimeout(function() {
        chatBox.innerHTML += `
          <div class="website-message">
            <img src="img/logo.png" id="website-logo" alt="Website Logo">
            <p><strong>Shoemaze:</strong> Hello! How can I help you?</p>
          </div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 500);
      document.getElementById('message-input').value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
  }
}


let counter = 20;

function incrementCounter() {
   counter++;
   updateCounterDisplay();
}

function decrementCounter() {
   if (counter > 0) {
    counter--;
    updateCounterDisplay();
  }  
}

function updateCounterDisplay() {
   document.getElementById('counterDisplay').innerText = counter;
}

  let quantity = 1;

  function incrementQuantity() {
    quantity++;
    updateQuantityDisplay();
  }

  function decrementQuantity() {
    if (quantity > 0) {
      quantity--;
      updateQuantityDisplay();
    }
  }

  function updateQuantityDisplay() {
    document.getElementById('QuantityDisplay').innerText = quantity;
  }

  function changeLanguage(languageCode) {
    console.log('Selected language:', languageCode);
  }
  

(function() {
  'use strict';
    window.addEventListener('load', function() {
      var form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
    }, false);
})();



let cartCount = 0;
let cartItems = [];

function addToCart(productName, productPrice, productImage) {
    productQuantity = parseInt(document.getElementById('QuantityDisplay').innerText);
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += productQuantity;
    } else {
      cartItems.push({ name: productName, price: productPrice, quantity: productQuantity, image: productImage });
    }
    cartCount += productQuantity;
    updateCartDisplay();
  }

  
      
function updateCartDisplay() {
  const cartItemsList = document.getElementById('cartItemsList');
  const cartCountDisplay = document.getElementById('cartCount');
  const subtotalAmountDisplay = document.getElementById('subtotalAmount');
  cartItemsList.innerHTML = '';
  let subtotalAmount = 0;
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
    <div class="row align-items-center">
    <div class="col-4">
    <a href="#">
        <img class="img-fluid" src="${item.image}" alt="">
    </a>
</div>
<div class="col-8">
    <p class="fs-sm fw-bold mb-6">
        <a class="text-body text-decoration-none" href="#">${item.name}</a> <br><br>
        <span class="text-muted">₱${item.price.toFixed(2)}</span>
    </p><br>
    <div class="d-flex align-items-center">
        <select class="form-select form-select-xxs w-auto" value="${item.quantity}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <a class="fs-xs text-gray-400 ms-auto text-decoration-none text-dark" href="#"  onclick="removeFromCart('${item.name}')">
            <i class="fe fe-x"></i> Remove
        </a>
    </div>
</div>
</div>
`;


                     
cartItemsList.appendChild(li);
  subtotalAmount += item.price * item.quantity;
  });
  cartCountDisplay.innerText = cartCount; 
  subtotalAmountDisplay.innerText = `₱${subtotalAmount.toFixed(2)}`;
}
    
              

function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartDataAndUpdateCount() {
  const storedCart = localStorage.getItem('cartItems');
  if (storedCart) {
      cartItems = JSON.parse(storedCart);
      cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  } else {
      cartItems = [];
      cartCount = 0;
  }

  updateCartDisplay();
}

loadCartDataAndUpdateCount();




function removeFromCart(productName) {
  const itemIndex = cartItems.findIndex(item => item.name === productName);

  if (itemIndex !== -1) {
      const removedItem = cartItems.splice(itemIndex, 1)[0];
      cartCount -= removedItem.quantity;
      updateCartDisplay();
      saveCartToLocalStorage();
  }
}

    