function incrementQuantity(quantityDisplayId) {
    const quantityDisplay = document.getElementById(quantityDisplayId);
    let quantity = parseInt(quantityDisplay.innerText, 10);
    quantity++;
    quantityDisplay.innerText = quantity;
    updateCart();
  }

function decrementQuantity(quantityDisplayId) {
  const quantityDisplay = document.getElementById(quantityDisplayId);
  let quantity = parseInt(quantityDisplay.innerText, 10);
  if (quantity > 1) {
    quantity--;
    quantityDisplay.innerText = quantity;
    updateCart();
  }
}

const checkboxes = document.querySelectorAll('.product-checkbox');
const cartTotalElement = document.getElementById('cart-total');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCart);
});


function updateCart() {
  let total = 0;

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const price = parseFloat(checkbox.getAttribute('data-price'));
      const quantityDisplayId = `QuantityDisplay${index + 1}`;
      const quantity = parseInt(document.getElementById(quantityDisplayId).innerText, 10);
      const subtotal = price * quantity;
      total += subtotal;

      document.querySelectorAll('.total-price')[index].textContent = `₱${subtotal.toFixed(2)}`;
    }
  });

  
  cartTotalElement.textContent = `₱${total.toFixed(2)}`;
  }
  function removeItem(productId) {
    
  console.log(`Deleting item with ID: ${productId}`);

  $('#' + productId).remove();
  }