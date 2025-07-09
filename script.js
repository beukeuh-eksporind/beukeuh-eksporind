document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener('click', function () {
    this.classList.toggle('change');
    menu.classList.toggle('show');
  });

  // Tutup menu jika klik di luar area menu & hamburger
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      hamburger.classList.remove('change');
      menu.classList.remove('show');
    }
  });

  // Fade in body setelah load
  document.body.classList.add('loaded');
});
