const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy-quote');
const tweetBtn = document.getElementById('tweet-quote');
const loadingEl = document.getElementById('loading');

async function fetchQuote() {
    loadingEl.style.display = 'block';
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        quoteEl.textContent = `"${data.content}"`;
        authorEl.textContent = `— ${data.author}`;
    } catch (error) {
        quoteEl.textContent = 'Failed to fetch quote.';
        authorEl.textContent = '';
    }
    loadingEl.style.display = 'none';
}

newQuoteBtn.addEventListener('click', fetchQuote);

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quoteEl.textContent} ${authorEl.textContent}`);
    alert('Quote copied to clipboard!');
});

tweetBtn.addEventListener('click', () => {
    const tweetText = `${quoteEl.textContent} ${authorEl.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
});

fetchQuote();
