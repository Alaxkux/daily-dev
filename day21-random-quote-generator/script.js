const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");
const themeToggleBtn = document.getElementById("toggle-theme");

async function getQuote() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quoteEl.textContent = `"${data.content}"`;
    authorEl.textContent = `- ${data.author}`;
}

newQuoteBtn.addEventListener("click", getQuote);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteEl.textContent} ${authorEl.textContent}`);
    alert("Quote copied to clipboard!");
});

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

getQuote();
