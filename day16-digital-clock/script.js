const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const themeToggle = document.getElementById('themeToggle');
const analogCanvas = document.getElementById('analogClock');
const ctx = analogCanvas.getContext('2d');

const alarmInput = document.getElementById('alarmTime');
const setAlarmBtn = document.getElementById('setAlarm');
const clearAlarmBtn = document.getElementById('clearAlarm');

const timezoneSelect = document.getElementById('timezoneSelect');
const worldTimeEl = document.getElementById('worldTime');

let alarmTime = null;
let alarmTimeout = null;

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
  dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  
  // Analog clock
  drawAnalogClock(now);
  
  // Alarm check
  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    alert("⏰ Alarm ringing!");
    alarmTime = null;
  }
}

function drawAnalogClock(now) {
  const radius = analogCanvas.width / 2;
  ctx.clearRect(0, 0, analogCanvas.width, analogCanvas.height);
  ctx.translate(radius, radius);
  
  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#222";
  ctx.fill();
  
  // Numbers
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let num = 1; num <= 12; num++) {
    let ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
  
  // Hands
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();
  
  drawHand((hour + minute / 60) * Math.PI / 6, radius * 0.5, 6);
  drawHand((minute + second / 60) * Math.PI / 30, radius * 0.75, 4);
  drawHand(second * Math.PI / 30, radius * 0.85, 2, "red");
  
  ctx.translate(-radius, -radius);
}

function drawHand(pos, length, width, color = "#fff") {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.rotate(pos);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

// Alarm
setAlarmBtn.addEventListener('click', () => {
  if (alarmInput.value) {
    alarmTime = alarmInput.value;
    alert(`Alarm set for ${alarmTime}`);
  }
});
clearAlarmBtn.addEventListener('click', () => {
  alarmTime = null;
  alert("Alarm cleared");
});

// Timezone
timezoneSelect.addEventListener('change', () => {
  const now = new Date();
  try {
    const options = { timeZone: timezoneSelect.value, timeStyle: 'medium', hourCycle: 'h24' };
    worldTimeEl.textContent = now.toLocaleTimeString([], options);
  } catch {
    worldTimeEl.textContent = "Invalid timezone";
  }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

setInterval(updateClock, 1000);
updateClock();
