// script.js

// Ubah judul halaman sesuai config
document.title = CONFIG.title;

// Ambil tombol
const openBtn = document.getElementById("openLetter");

// Saat tombol ditekan
openBtn.addEventListener("click", () => {

    // Efek tombol
    openBtn.innerHTML = "Opening... ❤️";

    // Tunggu sebentar agar animasi terasa halus
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 1000);

});