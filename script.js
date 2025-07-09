// Saat halaman selesai dimuat, tambahkan kelas 'loaded' untuk animasi fade-in
document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');

  // Toggle menu saat hamburger diklik
  const hamburger = document.querySelector('.hamburger');
  const menuGrid = document.querySelector('.menu-grid');

  if (hamburger && menuGrid) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('change');
      menuGrid.classList.toggle('show');
    });
  }

  // Toggle dropdown menu via klik (bukan hover)
  const dropdowns = document.querySelectorAll('.menu-dropdown.clickable');

  dropdowns.forEach(dropdown => {
    const toggleArea = dropdown.querySelector('span');
    const content = dropdown.querySelector('.menu-dropdown-content');

    toggleArea.addEventListener('click', (e) => {
      e.stopPropagation(); // cegah event bubbling
      content.classList.toggle('show');

      // Tutup dropdown lain jika sedang terbuka
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          const otherContent = other.querySelector('.menu-dropdown-content');
          otherContent.classList.remove('show');
        }
      });
    });
  });

  // Tutup semua dropdown saat klik di luar area menu
  document.addEventListener('click', function () {
    document.querySelectorAll('.menu-dropdown-content').forEach(el => {
      el.classList.remove('show');
    });
  });
});
