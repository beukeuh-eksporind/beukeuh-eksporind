document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  setTimeout(() => body.classList.add("loaded"), 100);

  // Hamburger Menu
  const hamburgerInput = document.querySelector('.hamburger-menu input');
  const menuGrid = document.getElementById('menu');

  if (hamburgerInput && menuGrid) {
    hamburgerInput.addEventListener("change", () => {
      menuGrid.classList.toggle("show", hamburgerInput.checked);
    });

    document.addEventListener("click", (e) => {
      const isClickInside = menuGrid.contains(e.target) || hamburgerInput.contains(e.target);
      if (!isClickInside) {
        menuGrid.classList.remove("show");
        hamburgerInput.checked = false;
      }
    });
  }

  // Dropdown Produk
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
