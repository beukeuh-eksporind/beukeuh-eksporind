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
// Statistik Counter Scroll
const counters = document.querySelectorAll(".stat-number");
let counterAnimated = false;

function animateCounters() {
  if (counterAnimated) return;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = target / 60;

    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });

  counterAnimated = true;
}

function checkStatsInView() {
  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateCounters();
  }
}

window.addEventListener("scroll", checkStatsInView);
window.addEventListener("load", checkStatsInView);
