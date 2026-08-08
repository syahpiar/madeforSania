/* ===========================
   FLOATING HEARTS
=========================== */

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (16 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

// Buat beberapa hati saat halaman dibuka
for(let i=0;i<20;i++){

    setTimeout(createHeart,i*300);

}

// Tambah hati baru setiap 800ms
setInterval(createHeart,800);
