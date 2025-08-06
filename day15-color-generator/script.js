const colorBox = document.getElementById('colorBox');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');

function getRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return randomColor.toUpperCase();
}

function updateColorBox(color) {
  colorBox.textContent = color;
  colorBox.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
}

function addToHistory(color) {
  let history = JSON.parse(localStorage.getItem('colorHistory')) || [];
  history.unshift(color); // add to beginning
  localStorage.setItem('colorHistory', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem('colorHistory')) || [];
  historyList.innerHTML = '';
  history.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  localStorage.removeItem('colorHistory');
  historyList.innerHTML = '';
}

generateBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  updateColorBox(newColor);
  addToHistory(newColor);
});

copyBtn.addEventListener('click', () => {
  const color = colorBox.textContent;
  navigator.clipboard.writeText(color)
    .then(() => alert(`Copied ${color} to clipboard!`))
    .catch(() => alert('Failed to copy'));
});

clearHistoryBtn.addEventListener('click', clearHistory);

// Load history on page load
renderHistory();
