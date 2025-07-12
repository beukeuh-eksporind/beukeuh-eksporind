document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  // Sidebar Toggle
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("open");
    });

    // Klik di luar sidebar untuk menutup
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    });
  }

  // Dropdown Produk (Klik)
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
