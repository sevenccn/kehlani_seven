const headerButton = document.querySelector('header button'); 
const muziekje = new Audio('kehlani_crash.mp3');
let GeluidAan = true;

function muziek() {
    if (GeluidAan == true) {
        muziekje.pause();
        GeluidAan = false;
    } else {
        muziekje.play();
        GeluidAan = true;
    }
}

headerButton.addEventListener("click", muziek);

