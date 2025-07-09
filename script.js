// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("change");
});

// Dropdown (klik untuk buka/tutup)
const dropdownTrigger = document.querySelector(".menu-dropdown > span");
const dropdownContent = document.querySelector(".menu-dropdown-content");

if (dropdownTrigger && dropdownContent) {
  dropdownTrigger.addEventListener("click", (e) => {
    e.stopPropagation(); // Jangan tutup langsung
    dropdownContent.classList.toggle("open");
  });

  // Tutup jika klik di luar
  document.addEventListener("click", (e) => {
    if (!dropdownContent.contains(e.target) && !dropdownTrigger.contains(e.target)) {
      dropdownContent.classList.remove("open");
    }
  });
}

// Fade-in saat halaman dimuat
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
