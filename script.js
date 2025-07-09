// Toggle menu overlay
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".menu-dropdown-content");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("change");
});

// Tutup dropdown saat klik luar
document.addEventListener("click", function (e) {
  if (!e.target.closest(".menu-dropdown")) {
    dropdownContent.style.display = "none";
  }
});

// Toggle dropdown klik (bukan hover)
dropdownToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});
