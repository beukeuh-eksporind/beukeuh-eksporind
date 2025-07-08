// script.js — Efek Animasi Halus

// Tambah kelas 'loaded' setelah halaman dimuat untuk efek fade-in
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Munculkan animasi tiap elemen dengan kelas .fade-in
  const faders = document.querySelectorAll(".fade-in");
  faders.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, 200 * i);
  });
});

// Scroll ke atas
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
