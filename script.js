// Function to fetch Bitcoin price from CoinGecko API (free service, no API key required)
async function fetchBitcoinPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const bitcoinPrice = data.bitcoin.usd;
    document.getElementById('bitcoinTicker').innerText = `Bitcoin Price: $${bitcoinPrice}`;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
  }
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

