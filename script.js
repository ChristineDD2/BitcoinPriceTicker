// Placeholder for Bitcoin price API
// Replace 'your_bitcoin_api_url' with the actual API URL to fetch Bitcoin price
const bitcoinAPI = 'your_bitcoin_api_url';

// Function to fetch Bitcoin price and update the ticker
function fetchBitcoinPrice() {
  fetch(bitcoinAPI)
    .then(response => response.json())
    .then(data => {
      const bitcoinPrice = data.price; // Replace 'price' with the actual property holding the Bitcoin price
      document.getElementById('bitcoinTicker').innerText = `Bitcoin Price: ${bitcoinPrice}`;
    })
    .catch(error => {
      console.error('Error fetching Bitcoin price:', error);
    });
}

// Fetch Bitcoin price every 10 seconds
setInterval(fetchBitcoinPrice, 10000);

// JavaScript for the floating pop-up menu
document.addEventListener("DOMContentLoaded", function() {
  const popupMenu = document.getElementById("popupMenu");

  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    const x = event.clientX;
    const y = event.clientY;
    popupMenu.style.display = "block";
    popupMenu.style.left = x + "px";
    popupMenu.style.top = y + "px";
  });

  document.addEventListener("click", function(event) {
    popupMenu.style.display = "none";
  });
});
