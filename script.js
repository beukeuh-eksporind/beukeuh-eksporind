// script.js — Beukeuh Eksporind

// 1. Fade-in body saat load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// 2. Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    menu.classList.toggle("show");
  });
}
