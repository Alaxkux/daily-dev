const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy-quote');
const tweetBtn = document.getElementById('tweet-quote');
const saveBtn = document.getElementById('save-quote');
const searchAuthor = document.getElementById('search-author');
const favoritesList = document.getElementById('favorites-list');

let allQuotes = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function fetchQuotes() {
    const res = await fetch('https://type.fit/api/quotes');
    allQuotes = await res.json();
    displayRandomQuote();
}

function displayRandomQuote() {
    const filteredQuotes = allQuotes.filter(q =>
        q.author?.toLowerCase().includes(searchAuthor.value.toLowerCase())
    );
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)] || { text: "No quotes found", author: "" };
    quoteText.textContent = randomQuote.text;
    authorText.textContent = randomQuote.author || "Unknown";
    changeBackground();
}

function changeBackground() {
    document.body.style.background = `hsl(${Math.random() * 360}, 50%, 80%)`;
}

function copyQuote() {
    navigator.clipboard.writeText(`"${quoteText.textContent}" - ${authorText.textContent}`);
    alert("Quote copied to clipboard!");
}

function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
}

function saveQuote() {
    const quoteObj = { text: quoteText.textContent, author: authorText.textContent };
    if (!favorites.some(fav => fav.text === quoteObj.text && fav.author === quoteObj.author)) {
        favorites.push(quoteObj);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
    }
}

function renderFavorites() {
    favoritesList.innerHTML = '';
    favorites.forEach(fav => {
        const li = document.createElement('li');
        li.textContent = `"${fav.text}" - ${fav.author}`;
        favoritesList.appendChild(li);
    });
}

newQuoteBtn.addEventListener('click', displayRandomQuote);
copyBtn.addEventListener('click', copyQuote);
tweetBtn.addEventListener('click', tweetQuote);
saveBtn.addEventListener('click', saveQuote);
searchAuthor.addEventListener('input', displayRandomQuote);

fetchQuotes();
renderFavorites();
