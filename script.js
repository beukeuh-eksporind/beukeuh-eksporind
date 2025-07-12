document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");

  // Toggle sidebar saat tombol hamburger di-check
  if (hamburgerInput && sidebar) {
    hamburgerInput.addEventListener("change", () => {
      if (hamburgerInput.checked) {
        sidebar.classList.add("open");
      } else {
        sidebar.classList.remove("open");
      }
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
});
