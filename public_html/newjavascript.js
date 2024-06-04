document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".addToCart");
  const cartItemsList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  let total = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      const price = parseFloat(this.previousElementSibling.textContent.replace("$ ", ""));
      const name = this.previousElementSibling.previousElementSibling.textContent;

      total += price;

      const li = document.createElement("li");
      li.textContent = `${name} - $${price}`;
      li.setAttribute("data-price", price);
      cartItemsList.appendChild(li);

      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    });
  });

  cartItemsList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      const price = parseFloat(event.target.getAttribute("data-price"));
      total -= price;
      event.target.remove();
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
  });

  const checkoutButton = document.getElementById("checkout");
  checkoutButton.addEventListener("click", function() {
    alert(`Thank you for your purchase! Total amount: $${total.toFixed(2)}`);
    // Here you can implement further actions like clearing the cart or sending the data to a server
  });

  // Function to filter products
  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      const productType = this.value;
      const galleries = document.querySelectorAll('.gallery');
      galleries.forEach(function(gallery) {
        if (productType === 'all' || gallery.dataset.type === productType) {
          gallery.style.display = 'block';
        } else {
          gallery.style.display = 'none';
        }
      });
    });
  });
});
