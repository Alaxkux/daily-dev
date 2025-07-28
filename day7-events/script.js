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



//Updated code

// Disable the button initially
button.disabled = true;

// Enable/disable button based on input
input.addEventListener("input", function () {
  button.disabled = input.value.trim() === "";
});

button.addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    message.textContent = "Please enter your name!";
    message.style.color = "red";
  } else {
    message.textContent = `Welcome, ${name}! 👋`;
    message.style.color = "green";
  }

  // Optional: Clear input and disable again
  input.value = "";
  button.disabled = true;
});


  // Clear message after 3 seconds
  setTimeout(() => {
    message.textContent = "";
  }, 3000);

// Disable button after click
  button.disabled = true;

  // Clear message after 3s
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
