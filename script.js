document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  // Hamburger
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("change", () => {
      sidebar.classList.toggle("open", menuToggle.checked);
    });
  }

  // Sidebar dropdown Produk
  const dropdown = document.querySelector(".sidebar-dropdown");
  const dropdownContent = document.querySelector(".sidebar-dropdown-content");

  if (dropdown && dropdownContent) {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation(); // cegah tertutup
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});
