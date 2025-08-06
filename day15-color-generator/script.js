function generateColor() {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = color;
  box.textContent = color;

  // Adjust text color based on brightness
  const brightness = parseInt(color.substring(1), 16);
  box.style.color = brightness < 0x888888 ? "#fff" : "#000";

  // Add to history
  addToHistory(color);
}

function copyColor() {
  const color = document.getElementById("colorBox").textContent;
  navigator.clipboard.writeText(color)
    .then(() => alert(`Copied ${color} to clipboard!`))
    .catch(() => alert("Failed to copy!"));
}

function addToHistory(color) {
  const historyList = document.getElementById("historyList");
  const item = document.createElement("li");
  item.textContent = color;
  item.style.backgroundColor = color;

  const brightness = parseInt(color.substring(1), 16);
  item.style.color = brightness < 0x888888 ? "#fff" : "#000";

  historyList.prepend(item); // most recent on top

  // Limit to last 5
  if (historyList.children.length > 5) {
    historyList.removeChild(historyList.lastChild);
  }
}
