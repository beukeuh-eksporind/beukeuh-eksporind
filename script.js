document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");
  const dropdown = document.querySelector(".sidebar-dropdown");

  // Toggle sidebar saat hamburger diklik
  if (hamburgerInput && sidebar) {
    hamburgerInput.addEventListener("change", () => {
      sidebar.classList.toggle("open", hamburgerInput.checked);
    });
  }

  // Toggle dropdown menu "Produk"
  if (dropdown) {
    const toggleLink = dropdown.querySelector(".dropdown-toggle");

    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // Hindari nutup dari event global
      dropdown.classList.toggle("open");
    });
  }

  // Tutup semua jika klik di luar
  document.addEventListener("click", (e) => {
    const clickInsideSidebar = sidebar.contains(e.target);
    const clickHamburger = hamburgerInput.contains(e.target);
    const clickDropdown = dropdown && dropdown.contains(e.target);

    if (!clickInsideSidebar && !clickHamburger) {
      sidebar.classList.remove("open");
      hamburgerInput.checked = false;
    }

    if (!clickDropdown) {
      dropdown?.classList.remove("open");
    }
  });
});
