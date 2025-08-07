const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const themeToggle = document.getElementById('themeToggle');
const analogCanvas = document.getElementById('analogClock');
const ctx = analogCanvas.getContext('2d');
const clockWrapper = document.getElementById('clockWrapper');

const alarmInput = document.getElementById('alarmTime');
const alarmSoundSelect = document.getElementById('alarmSound');
const setAlarmBtn = document.getElementById('setAlarm');
const clearAlarmsBtn = document.getElementById('clearAlarms');
const alarmListEl = document.getElementById('alarmList');

const timezoneSelect = document.getElementById('timezoneSelect');
const worldTimeEl = document.getElementById('worldTime');

let alarms = JSON.parse(localStorage.getItem('alarms') || '[]');
renderAlarms();

// Clock update
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  drawAnalogClock(now);

  alarms.forEach(alarm => {
    if (`${hours}:${minutes}` === alarm.time) {
      document.getElementById(`sound-${alarm.sound}`).play();
    }
  });
}

function drawAnalogClock(now) {
  const radius = analogCanvas.width / 2;
  ctx.clearRect(0, 0, analogCanvas.width, analogCanvas.height);
  ctx.translate(radius, radius);

  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#222";
  ctx.fill();

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

// Alarms
setAlarmBtn.addEventListener('click', () => {
  if (alarmInput.value) {
    alarms.push({ time: alarmInput.value, sound: alarmSoundSelect.value });
    localStorage.setItem('alarms', JSON.stringify(alarms));
    renderAlarms();
  }
});

clearAlarmsBtn.addEventListener('click', () => {
  alarms = [];
  localStorage.removeItem('alarms');
  renderAlarms();
});

function renderAlarms() {
  alarmListEl.innerHTML = "";
  alarms.forEach((alarm, index) => {
    const li = document.createElement('li');
    li.textContent = `${alarm.time} (${alarm.sound})`;
    const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      alarms.splice(index, 1);
      localStorage.setItem('alarms', JSON.stringify(alarms));
      renderAlarms();
    };
    li.appendChild(delBtn);
    alarmListEl.appendChild(li);
  });
}

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

// Theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Drag & Drop
let offsetX, offsetY;
clockWrapper.addEventListener('dragstart', (e) => {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
document.body.addEventListener('dragover', (e) => {
  e.preventDefault();
});
document.body.addEventListener('drop', (e) => {
  e.preventDefault();
  clockWrapper.style.left = `${e.pageX - offsetX}px`;
  clockWrapper.style.top = `${e.pageY - offsetY}px`;
});

setInterval(updateClock, 1000);
updateClock();
