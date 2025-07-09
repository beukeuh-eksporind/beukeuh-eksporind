// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("change");
});

// Dropdown toggle (klik buka-tutup)
const dropdown = document.querySelector(".menu-dropdown");
const dropdownContent = document.querySelector(".menu-dropdown-content");

if (dropdown && dropdownContent) {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation(); // agar tidak langsung tertutup
    dropdownContent.classList.toggle("open");
  });

  // Tutup dropdown jika klik di luar
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove("open");
    }
  });
}

// Fade in body saat loaded
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
