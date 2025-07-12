document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");

  // Toggle sidebar saat hamburger di-check
  if (hamburgerInput && sidebar) {
    hamburgerInput.addEventListener("change", () => {
      sidebar.classList.toggle("open", hamburgerInput.checked);
    });

    // Klik di luar sidebar untuk menutup
    document.addEventListener("click", (e) => {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickHamburger = hamburgerInput.contains(e.target);

      if (!isClickInsideSidebar && !isClickHamburger) {
        sidebar.classList.remove("open");
        hamburgerInput.checked = false;
      }
    });
  }

  // Dropdown sidebar untuk menu Produk
  const dropdownTrigger = document.querySelector(".sidebar-dropdown");
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownTrigger.classList.toggle("open");
    });

    // Klik di luar untuk menutup dropdown
    document.addEventListener("click", (e) => {
      if (!dropdownTrigger.contains(e.target)) {
        dropdownTrigger.classList.remove("open");
      }
    });
  }
});
