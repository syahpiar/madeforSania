let index = 0;

const photo = document.getElementById("photo");

function showPhoto(){
    photo.src = CONFIG.photos[index];
}

showPhoto();

document.getElementById("nextBtn").onclick = ()=>{

    index++;

    if(index >= CONFIG.photos.length){
        index = 0;
    }

    showPhoto();

}

document.getElementById("prevBtn").onclick = ()=>{

    index--;

    if(index < 0){
        index = CONFIG.photos.length-1;
    }

    showPhoto();

}

document.getElementById("finishBtn").onclick = ()=>{

    location.href="ending.html";

}