/* =========================================
   LETTER + GALLERY CONTROLLER
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const letterSection =
    document.getElementById("letterSection");

const gallerySection =
    document.getElementById("gallerySection");

const letterContent =
    document.getElementById("letterContent");

const letterEnding =
    document.getElementById("letterEnding");

const nextBtn =
    document.getElementById("nextBtn");

const backBtn =
    document.getElementById("backBtn");

const music =
    document.getElementById("music");


/* =========================================
   MUSIC
========================================= */

if (music) {

    music.loop = true;

    music.volume = 0.7;

}


/*
    Mulai musik.
*/

function startMusic() {

    if (!music) {
        return;
    }

    if (!music.paused) {
        return;
    }

    music.play().catch(() => {

        /*
            Browser mungkin memblokir autoplay.
            Interaksi user akan mencoba lagi.
        */

    });

}


/*
    Saat letter mulai,
    langsung coba memainkan lagu.
*/

window.addEventListener(
    "load",
    () => {

        startMusic();

    }
);


/*
    Fallback untuk HP.
*/

document.addEventListener(
    "pointerdown",
    () => {

        startMusic();

    },
    {
        once: true
    }
);


/* =========================================
   LOAD LETTER
========================================= */

function loadLetter() {

    if (!letterContent) {
        return;
    }


    let letterFile =
        "data/letter.txt";


    if (
        typeof CONFIG !== "undefined" &&
        CONFIG.letterFile
    ) {

        letterFile =
            CONFIG.letterFile;

    }


    fetch(letterFile)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Letter not found"
                );

            }

            return response.text();

        })

        .then(text => {

            typeWriter(text);

        })

        .catch(error => {

            console.error(error);

            letterContent.textContent =
                "Surat belum tersedia ❤️";

        });

}


/* =========================================
   TYPEWRITER
========================================= */

function typeWriter(text) {

    let index = 0;

    letterContent.textContent = "";


    const speed = 35;


    function typing() {


        /*
            Pastikan lagu tetap berjalan
            selama surat diketik.
        */

        startMusic();


        if (index < text.length) {

            letterContent.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                typing,
                speed
            );

        }

        else {

            /*
                SURAT SELESAI.

                Baru sekarang:
                Happy Birthday muncul.
            */

            showLetterEnding();

        }

    }


    typing();

}


/* =========================================
   SHOW HAPPY BIRTHDAY
========================================= */

function showLetterEnding() {

    if (!letterEnding) {
        return;
    }

    letterEnding.classList.add("show");

}


/* =========================================
   NEXT → GALLERY
========================================= */

function showGallery() {

    if (!letterSection || !gallerySection) {
        return;
    }


    /*
        Musik tetap lagu yang sama.
    */

    startMusic();


    /*
        Sembunyikan LETTER.
    */

    letterSection.classList.remove(
        "active-section"
    );

    letterSection.classList.add(
        "hidden-section"
    );


    /*
        Tampilkan GALLERY + ENDING.
    */

    gallerySection.classList.remove(
        "hidden-section"
    );

    gallerySection.classList.add(
        "active-section"
    );


    /*
        Scroll ke paling atas.
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   NEXT BUTTON
========================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        showGallery
    );

}


/* =========================================
   BACA LAGI
========================================= */

function showLetterAgain() {

    window.location.href = "index.html";

}


/* =========================================
   BACK BUTTON
========================================= */

if (backBtn) {

    backBtn.addEventListener(
        "click",
        showLetterAgain
    );

}


/* =========================================
   START
========================================= */

loadLetter();
