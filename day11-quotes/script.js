// Day 11: Quote Generator

const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt"
];

const quoteBox = document.getElementById("quoteBox");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");

function showQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.classList.remove("fade-in"); // reset animation
  void quoteBox.offsetWidth; // force reflow
  quoteBox.textContent = random;
  quoteBox.classList.add("fade-in");
}

function copyQuote() {
  navigator.clipboard.writeText(quoteBox.textContent)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(() => alert("Failed to copy"));
}

newQuoteBtn.addEventListener("click", showQuote);
copyBtn.addEventListener("click", copyQuote);


const bgColors = ["#ffe0e0", "#e0f7fa", "#fff9c4", "#e8f5e9", "#ede7f6", "#fce4ec"];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const random = quotes[randomIndex];
  const color = bgColors[randomIndex % bgColors.length];

  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth;
  quoteBox.textContent = random;
  quoteBox.classList.add("fade-in");

  document.body.style.backgroundColor = color;
}
