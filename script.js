// script.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu-grid');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change');
    menu.classList.toggle('show');
  });
});
