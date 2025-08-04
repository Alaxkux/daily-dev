// Day 13: Task Manager

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
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
      ${task.text}
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  tasks.push({ text: value, done: false });
  saveTasks();
  input.value = "";
  renderTasks();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Initial load
renderTasks();
