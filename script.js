// Saat halaman selesai load, tambahkan class 'loaded' ke body
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

// Toggle menu mobile (hamburger)
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('show');
  closeDropdown(); // Tutup dropdown jika sedang terbuka
});

// Dropdown Produk (klik untuk toggle)
const dropdown = document.querySelector('.menu-dropdown');

if (dropdown) {
  dropdown.addEventListener('click', function (e) {
    e.stopPropagation(); // Mencegah close saat klik dalam dropdown
    dropdown.classList.toggle('open');
  });

  // Tutup dropdown jika klik di luar area
  window.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });
}

function closeDropdown() {
  dropdown.classList.remove('open');
}
