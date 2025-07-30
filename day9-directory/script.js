// Day 9: Student Directory

const students = [
  { name: "Zayn Malik", level: 100, cgpa: 4.5 },
  { name: "Tariq Bello", level: 200, cgpa: 3.9 },
  { name: "Kemi Ade", level: 100, cgpa: 4.0 },
  { name: "Sade Yusuf", level: 300, cgpa: 3.7 },
  { name: "Al-ameen Okusi", level: 200, cgpa: 4.6 },
];

const searchInput = document.getElementById("searchInput");
const levelFilter = document.getElementById("levelFilter");
const studentList = document.getElementById("studentList");

function renderStudents(list) {
  studentList.innerHTML = "";

  if (list.length === 0) {
    studentList.innerHTML = "<li>No student found.</li>";
    return;
  }

  list.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name} — ${student.level}L — CGPA: ${student.cgpa}`;
    studentList.appendChild(li);
  });
}

function filterStudents() {
  const search = searchInput.value.toLowerCase();
  const level = levelFilter.value;

  let filtered = students.filter(student => {
    const matchesName = student.name.toLowerCase().includes(search);
    const matchesLevel = level === "all" || student.level == level;
    return matchesName && matchesLevel;
  });

  renderStudents(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterStudents);
levelFilter.addEventListener("change", filterStudents);

// Initial render
renderStudents(students);
