// script.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const closeMenu = document.getElementById('closeMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  // Tampilkan overlay saat tombol hamburger diklik
  hamburger.addEventListener('click', () => {
    mobileOverlay.classList.add('active');
  });

  // Sembunyikan overlay saat tombol close diklik
  closeMenu.addEventListener('click', () => {
    mobileOverlay.classList.remove('active');
  });

  // Tutup menu jika klik di luar menu saat overlay aktif
  mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
      mobileOverlay.classList.remove('active');
    }
  });
});
