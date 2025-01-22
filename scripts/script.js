
const headerButton = document.querySelector('.listen-button'); 
const hamburgerButton = document.querySelector('.hamburger-menu'); 

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

headerButton.addEventListener('click', muziek);

hamburgerButton.addEventListener('click', function() {
    const nav = document.querySelector('nav'); 
    nav.classList.toggle('open'); 
    

    if (nav.classList.contains('open')) {
        hamburgerButton.style.backgroundColor = 'green';  
    } else {
        hamburgerButton.style.backgroundColor = 'red'; 
    }
});
