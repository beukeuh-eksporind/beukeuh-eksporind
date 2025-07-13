document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  const hamburgerInput = document.querySelector(".hamburger-menu input");
  const sidebar = document.querySelector(".sidebar");

  if (hamburgerInput && sidebar) {
    hamburgerInput.addEventListener("change", () => {
      sidebar.classList.toggle("open", hamburgerInput.checked);
    });

    document.addEventListener("click", (e) => {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickHamburger = document.querySelector(".hamburger-menu").contains(e.target);

      if (!isClickInsideSidebar && !isClickHamburger) {
        sidebar.classList.remove("open");
        hamburgerInput.checked = false;
      }
    });
  }

  // Dropdown menu Produk
  const dropdown = document.querySelector(".sidebar-dropdown");
  const dropdownTrigger = dropdown?.querySelector("a");

  if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});

// Fade-in on scroll
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});
fadeIns.forEach(el => observer.observe(el));
