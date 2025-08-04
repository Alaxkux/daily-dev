// Day 13++: Upgraded Task Manager

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const dueInput = document.getElementById("dueInput");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  let filtered = tasks.filter(task => {
    if (currentFilter === "all") return true;
    if (currentFilter === "completed") return task.done;
    if (currentFilter === "pending") return !task.done;
  });

  if (filtered.length === 0) {
    taskList.innerHTML = "<li>No tasks found.</li>";
    return;
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";

    li.innerHTML = `
      <div>
        <input type="text" value="${task.text}" onchange="editTask(${index}, this.value)">
        ${task.dueDate ? `<div class="date">Due: ${task.dueDate}</div>` : ""}
      </div>
      <div>
        <button onclick="toggleTask(${index})">${task.done ? "Undo" : "Done"}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index, newText) {
  tasks[index].text = newText;
  saveTasks();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();
  const dueDate = dueInput.value;

  if (!value) return;

  tasks.push({ text: value, done: false, dueDate });
  saveTasks();
  input.value = "";
  dueInput.value = "";
  renderTasks();
});

clearBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

renderTasks();
