// Day 14++ Calculator with themes + keyboard

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("themeToggle");

let expression = "";

function updateDisplay() {
  display.value = expression;
}

function addToHistory(entry) {
  const list = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  list.prepend(li);

  // Keep only latest 5 entries
  while (list.children.length > 5) {
    list.removeChild(list.lastChild);
  }
}


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
    } else if (value === "=") {
      evaluateExpression();
      return;
    } else {
      expression += value;
    }

    updateDisplay();
  });
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "Enter") {
    evaluateExpression();
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);
  } else if (key === "Escape") {
    expression = "";
  } else if (/[\d\+\-\*\/\.\(\)]/.test(key)) {
    expression += key;
  }

  updateDisplay();
});

// Theme toggle
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
