document.addEventListener("DOMContentLoaded", function () {
  // Efek body fade-in
  document.body.classList.add('loaded');

  // Hamburger & Menu toggle
  const hamburger = document.querySelector('.hamburger');
  const menuGrid = document.querySelector('.menu-grid');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change');
    menuGrid.classList.toggle('show');
  });

  // Tutup menu saat klik di luar (khusus mobile)
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!hamburger.contains(target) && !menuGrid.contains(target)) {
      hamburger.classList.remove('change');
      menuGrid.classList.remove('show');
    }
  });

  // Dropdown agar tidak langsung hilang saat hover
  const dropdowns = document.querySelectorAll('.menu-dropdown');

  dropdowns.forEach(drop => {
    drop.addEventListener('mouseenter', () => {
      const content = drop.querySelector('.menu-dropdown-content');
      if (content) content.style.display = 'block';
    });

    drop.addEventListener('mouseleave', () => {
      const content = drop.querySelector('.menu-dropdown-content');
      if (content) content.style.display = 'none';
    });
  });
});
