document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.menu-dropdown');
  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.menu-dropdown-content');

  // Toggle on click
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // Prevent closing when clicking inside dropdown
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
});
