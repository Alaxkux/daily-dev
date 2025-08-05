// Day 14: Calculator Logic

let display = document.getElementById("display");

function append(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.textContent.replace('%', '/100'));
    display.textContent = result;
  } catch (e) {
    display.textContent = "Error";
  }
}
