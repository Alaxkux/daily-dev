// Day 8: Simple To-Do App

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Remove task on click
    li.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskList.appendChild(li);
  });
}
