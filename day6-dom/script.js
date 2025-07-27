// Day 6: Dark mode toggle

function toggleDarkMode() {
  const body = document.body;
  const greeting = document.getElementById("greeting");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    greeting.textContent = "Welcome to Dark Mode 🌙";
  } else {
    greeting.textContent = "Welcome to Light Mode ☀️";
  }
}
