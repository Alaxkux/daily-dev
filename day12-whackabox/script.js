// Day 12: Whack-a-Box Game

const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let gameInterval;
let boxTimeout;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  startBtn.disabled = true;
  gameArea.innerHTML = "";

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearTimeout(boxTimeout);
      gameArea.innerHTML = "";
      alert("Game Over! Your score: " + score);
      startBtn.disabled = false;
    } else {
      spawnBox();
    }
  }, 1000);
}

function spawnBox() {
  gameArea.innerHTML = "";

  const box = document.createElement("div");
  box.className = "box";

  const x = Math.floor(Math.random() * 260); // gameArea width - box size
  const y = Math.floor(Math.random() * 260); // gameArea height - box size

  box.style.left = x + "px";
  box.style.top = y + "px";

  box.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    box.remove();
  };

  gameArea.appendChild(box);

  // Auto remove box if not clicked in 800ms
  boxTimeout = setTimeout(() => {
    box.remove();
  }, 800);
}

startBtn.addEventListener("click", startGame);


const difficultySelect = document.getElementById("difficulty");
let boxDuration = 1000; // default for medium


const difficulty = difficultySelect.value;

if (difficulty === "easy") boxDuration = 1200;
else if (difficulty === "hard") boxDuration = 600;
else boxDuration = 1000;


boxTimeout = setTimeout(() => {
  box.remove();
}, boxDuration);