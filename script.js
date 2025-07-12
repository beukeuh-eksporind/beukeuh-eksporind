document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
      hamburger.classList.toggle("change"); // 🔁 tambahkan ini
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove("show");
        hamburger.classList.remove("change"); // 🔁 tutup X juga
      }
    });
  }

  // Dropdown Produk — klik untuk tampil/simpan
  const dropdownTrigger = document.querySelector(".menu-dropdown > span");
  const dropdownContent = document.querySelector(".menu-dropdown-content");

  if (dropdownTrigger && dropdownContent) {
    dropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        !dropdownContent.contains(e.target) &&
        !dropdownTrigger.contains(e.target)
      ) {
        dropdownContent.classList.remove("open");
      }
    });
  }
});
