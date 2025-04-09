const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "If you can dream it, you can do it. – Walt Disney"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}