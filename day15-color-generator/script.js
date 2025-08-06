function generateColor() {
  const color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = color;
  box.textContent = color;

  // Adjust text color based on brightness
  const brightness = parseInt(color.substring(1), 16);
  box.style.color = brightness < 0x888888 ? "#fff" : "#000";
}
