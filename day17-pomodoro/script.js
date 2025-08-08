let workMinutes = 25;
let breakMinutes = 5;
let isWork = true;
let timer;
let timeRemaining = workMinutes * 60;
let completedPomodoros = 0;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const workInput = document.getElementById("workMinutes");
const breakInput = document.getElementById("breakMinutes");
const applyBtn = document.getElementById("applyBtn");
const completedDisplay = document.getElementById("completed");
const toggleTheme = document.getElementById("toggleTheme");

// Request Notification permission
if ("Notification" in window) {
  Notification.requestPermission();
}

function updateDisplay() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timer);
      timer = null;
      playSound();
      sendNotification(isWork ? "Work session over! Time for a break." : "Break over! Back to work.");
      if (isWork) completedPomodoros++;
      completedDisplay.textContent = completedPomodoros;
      isWork = !isWork;
      timeRemaining = (isWork ? workMinutes : breakMinutes) * 60;
      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  isWork = true;
  timeRemaining = workMinutes * 60;
  updateDisplay();
}

function applySettings() {
  workMinutes = parseInt(workInput.value);
  breakMinutes = parseInt(breakInput.value);
  resetTimer();
}

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}

function sendNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("Pomodoro Pro", { body: message });
  }
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
applyBtn.addEventListener("click", applySettings);

updateDisplay();
