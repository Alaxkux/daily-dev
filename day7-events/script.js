// Day 7: Events and Forms

const input = document.getElementById("username");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    message.textContent = "Please enter your name!";
    message.style.color = "red";
  } else {
    message.textContent = `Welcome, ${name}! 👋`;
    message.style.color = "green";
  }
});
