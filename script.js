document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");
  const dropdownTrigger = document.querySelector(".sidebar-dropdown");

  // Toggle sidebar saat hamburger di-check
  if (hamburgerInput && sidebar) {
    hamburgerInput.addEventListener("change", () => {
      sidebar.classList.toggle("open", hamburgerInput.checked);
    });

    // Tutup sidebar jika klik di luar
    document.addEventListener("click", (e) => {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickHamburger = document.querySelector(".hamburger-menu").contains(e.target);

      if (!isClickInsideSidebar && !isClickHamburger) {
        sidebar.classList.remove("open");
        hamburgerInput.checked = false;
      }
    });
  }

  // Dropdown Produk (klik untuk buka/tutup)
  if (dropdownTrigger) {
    const toggleLink = dropdownTrigger.querySelector("a");

    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdownTrigger.classList.toggle("open");
    });

    // Tutup dropdown jika klik di luar
    document.addEventListener("click", (e) => {
      if (!dropdownTrigger.contains(e.target)) {
        dropdownTrigger.classList.remove("open");
      }
    });
  }
});
