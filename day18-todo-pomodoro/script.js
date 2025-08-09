const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progressText = document.getElementById("progressText");
const themeToggle = document.getElementById("theme-toggle");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

// Add task
addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
});

// Toggle complete
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Start Pomodoro for task
function startPomodoro(taskName) {
    window.location.href = `../day17-pomodoro/index.html?task=${encodeURIComponent(taskName)}`;
}

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = "";
    let filteredTasks = tasks.filter(t =>
        filter === "all" ? true : filter === "active" ? !t.completed : t.completed
    );

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task" + (task.completed ? " completed" : "");
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTask(${index})">✓</button>
                <button onclick="startPomodoro('${task.text}')">⏳</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    updateProgress();
}

// Update progress
function updateProgress() {
    let completed = tasks.filter(t => t.completed).length;
    progressText.textContent = `${completed}/${tasks.length} tasks completed`;
}

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Filter
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();
