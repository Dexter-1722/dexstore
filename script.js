let cart = [];
let total = 0;

function addToCart(book, price) {
  cart.push({ book, price });
  total += price;
  document.getElementById("cart-items").innerHTML += `<li>${book} - ₹${price}</li>`;
  document.getElementById("cart-total").innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("Thank you! Your order has been placed.");
  cart = [];
  total = 0;
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-total").innerText = "0";
}

function searchBooks() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const books = document.querySelectorAll(".book-card");

  books.forEach(book => {
    const title = book.querySelector("h3").innerText.toLowerCase();
    if (title.includes(input)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}
