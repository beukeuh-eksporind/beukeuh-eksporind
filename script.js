// Saat halaman selesai dimuat, tambahkan kelas 'loaded' ke body
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Tombol hamburger toggle menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  hamburger.classList.toggle('open');

  // Ubah isi tombol hamburger dari ≡ ke ✖
  if (hamburger.classList.contains('open')) {
    hamburger.innerHTML = '&times;'; // ✖
  } else {
    hamburger.innerHTML = '&#9776;'; // ≡
  }
});
