document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) { // Pastikan elemen ditemukan sebelum menambahkan event listener
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Optional: Smooth scroll for internal links
    // Ini memastikan ketika Anda mengklik link navigasi (e.g., #about), halaman akan scroll dengan halus
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Abaikan link yang hanya '#' atau yang mengarah ke bagian yang sama dengan current URL hash
        // Ini untuk menghindari masalah saat mengklik link yang hanya '#top' atau '#'
        if (anchor.getAttribute('href') !== '#' && anchor.getAttribute('href') !== window.location.hash) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Mencegah perilaku default dari link (melompat langsung)

                const targetId = this.getAttribute('href'); // Dapatkan ID target dari atribut href
                const targetElement = document.querySelector(targetId); // Temukan elemen target

                if (targetElement) {
                    // Tutup menu hamburger jika terbuka setelah klik link
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }

                    // Lakukan smooth scroll ke elemen target
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Perbarui URL hash tanpa memicu lompatan instan (untuk bookmarking/history)
                    history.pushState(null, null, targetId);
                }
            });
        }
    });
});
