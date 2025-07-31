// Day 10: Feedback Review App

const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function saveReviews() {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function renderReviews() {
  reviewList.innerHTML = "";

  if (reviews.length === 0) {
    reviewList.innerHTML = "<p>No reviews yet.</p>";
    return;
  }

  reviews.forEach((review, index) => {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <strong>${review.name}</strong> <span>${review.emoji}</span>
      <p>${review.message}</p>
      <button onclick="deleteReview(${index})">❌</button>
    `;
    reviewList.appendChild(div);
  });
}

function deleteReview(index) {
  reviews.splice(index, 1);
  saveReviews();
  renderReviews();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const emoji = document.getElementById("emoji").value;

  if (name === "" || message === "") return;

  reviews.push({ name, message, emoji });
  saveReviews();
  renderReviews();

  form.reset();
});

// Initial load
renderReviews();
