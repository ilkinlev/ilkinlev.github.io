// Open modal function
function openModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }
});
