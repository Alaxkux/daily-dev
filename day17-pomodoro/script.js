const timerDisplay = document.getElementById('timerDisplay');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const workInput = document.getElementById('workInput');
const breakInput = document.getElementById('breakInput');
const applySettingsBtn = document.getElementById('applySettings');
const pomodoroCountEl = document.getElementById('pomodoroCount');

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let workMinutes = parseInt(workInput.value);
let breakMinutes = parseInt(breakInput.value);
let secondsRemaining = workMinutes * 60;
let isRunning = false;
let isWorkSession = true;
let timerInterval;

let pomodoroCount = parseInt(localStorage.getItem('pomodoroCount') || '0');
pomodoroCountEl.textContent = pomodoroCount;

function updateTimerDisplay() {
  const minutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
  const seconds = String(secondsRemaining % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function updateProgressRing() {
  const totalTime = (isWorkSession ? workMinutes : breakMinutes) * 60;
  const progress = secondsRemaining / totalTime;
  const offset = circumference - progress * circumference;
  circle.style.strokeDashoffset = offset;
}

function startPauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startPauseBtn.textContent = "▶ Start";
  } else {
    isRunning = true;
    startPauseBtn.textContent = "⏸ Pause";
    timerInterval = setInterval(() => {
      secondsRemaining--;
      updateTimerDisplay();
      updateProgressRing();

      if (secondsRemaining <= 0) {
        if (isWorkSession) {
          pomodoroCount++;
          localStorage.setItem('pomodoroCount', pomodoroCount);
          pomodoroCountEl.textContent = pomodoroCount;
          secondsRemaining = breakMinutes * 60;
        } else {
          secondsRemaining = workMinutes * 60;
        }
        isWorkSession = !isWorkSession;
        updateTimerDisplay();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isWorkSession = true;
  secondsRemaining = workMinutes * 60;
  updateTimerDisplay();
  updateProgressRing();
  startPauseBtn.textContent = "▶ Start";
}

function applySettings() {
  workMinutes = parseInt(workInput.value);
  breakMinutes = parseInt(breakInput.value);
  resetTimer();
}

startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
applySettingsBtn.addEventListener('click', applySettings);

updateTimerDisplay();
updateProgressRing();


const alarmSound = document.getElementById('alarmSound');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
}

// Theme toggle
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Request notification permission on load
if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

function notifyUser(message) {
  if (Notification.permission === 'granted') {
    new Notification(message);
  }
  alarmSound.currentTime = 0;
  alarmSound.play();
}

// Modify timer end logic
function startPauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startPauseBtn.textContent = "▶ Start";
  } else {
    isRunning = true;
    startPauseBtn.textContent = "⏸ Pause";
    timerInterval = setInterval(() => {
      secondsRemaining--;
      updateTimerDisplay();
      updateProgressRing();

      if (secondsRemaining <= 0) {
        if (isWorkSession) {
          pomodoroCount++;
          localStorage.setItem('pomodoroCount', pomodoroCount);
          pomodoroCountEl.textContent = pomodoroCount;
          notifyUser("Work session done! Time for a break 🎉");
          secondsRemaining = breakMinutes * 60;
        } else {
          notifyUser("Break is over! Back to work 💪");
          secondsRemaining = workMinutes * 60;
        }
        isWorkSession = !isWorkSession;
        updateTimerDisplay();
      }
    }, 1000);
  }
}
