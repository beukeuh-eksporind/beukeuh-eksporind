document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  // Toggle Sidebar dari checkbox hamburger
  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");

  if (hamburgerInput && sidebar) {
    // Klik di luar sidebar akan menutup jika terbuka
    document.addEventListener("click", (e) => {
      if (
        hamburgerInput.checked &&
        !sidebar.contains(e.target) &&
        !hamburgerInput.parentElement.contains(e.target)
      ) {
        hamburgerInput.checked = false;
      }
    });
  }

  // Dropdown Produk
  const dropdown = document.querySelector(".sidebar-dropdown");
  const dropdownContent = document.querySelector(".sidebar-dropdown-content");

  if (dropdown && dropdownContent) {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    // Tutup dropdown saat klik di luar
    document.addEventListener("click", (e) => {
      if (
        dropdown.classList.contains("open") &&
        !dropdown.contains(e.target)
      ) {
        dropdown.classList.remove("open");
      }
    });
  }
});
