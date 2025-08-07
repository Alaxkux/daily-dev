const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const themeToggle = document.getElementById('themeToggle');

function updateClock() {
  const now = new Date();
  
  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  
  // Date
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  dateEl.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

setInterval(updateClock, 1000);
updateClock(); // run once at start

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
