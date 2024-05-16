// reset
'use strict';

// definisco una variable di un arrey d'oggetti:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// definisco variabili per la lettura del DOM:
const fotoPrinciale = document.querySelector('.items');
const fotoMiniature = document.querySelector('.thumbs');

const frecciaSu = document.querySelector('.prev');
const frecciaGiu = document.querySelector('.next');

const classItem = 'item';
const classThumb = 'thumb';


// definisco variabile di partenza:
let currentImage = 0;

creaElementi(fotoPrinciale, classItem);
creaElementi(fotoMiniature, classThumb);

// creo h2 e p:
const titolo = document.createElement('h2');
const testo = document.createElement('p');
fotoPrinciale.append(titolo);
fotoPrinciale.append(testo);
creaTesto();

// vado in lettura sui nuovi elementi creati:
const newItems = document.querySelectorAll('.item');
console.log(newItems);
const newThumbs = document.querySelectorAll('.thumb');
console.log(currentImage);

// vado in ascolto dei bottoni su:
frecciaSu.addEventListener('click', () => {
    console.log('CIAO!!!');

    newItems[currentImage].classList.remove('active');
    newThumbs[currentImage].classList.remove('active');

    if (currentImage > 0) {
        currentImage--;
    } else {
        currentImage = newItems.length - 1;

    }
    creaTesto()
    newItems[currentImage].classList.add('active');
    newThumbs[currentImage].classList.add('active');
});

// vado in ascolto dei bottoni giù:
frecciaGiu.addEventListener('click', () => {

    newItems[currentImage].classList.remove('active');
    newThumbs[currentImage].classList.remove('active');

    if (currentImage < newItems.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;

    }

    creaTesto()
    newItems[currentImage].classList.add('active');
    newThumbs[currentImage].classList.add('active');
});

// vado in ascolto sulle foto in miniature e scateno un evento:
fotoMiniature.addEventListener('click', (e) => {
    const idx = parseInt(e.target.parentElement.dataset.index);
    console.log(idx);
    console.log(e.target.parentElement.classList.contains('thumb'));
    
    if (e.target.parentElement.classList.contains('thumb')){

        newItems[currentImage].classList.remove('active');
        newThumbs[currentImage].classList.remove('active');

        currentImage = idx;

        newItems[currentImage].classList.add('active');
        newThumbs[currentImage].classList.add('active');

        creaTesto();

    };

});


// definisco funzione per creare elementi:
function creaElementi(elemento, classe){
    images.forEach((element, index)=> {
        // creo gli elementi:
        const div = document.createElement('div');
        div.className = classe;
        div.dataset.index = index;
        const imgItem = document.createElement('img');
        if (index === currentImage) div.classList.add('active');
        imgItem.src = element.image;
        imgItem.alt = element.title;

        div.append(imgItem);
        elemento.append(div);
    });

}

// definisco una funzione per il testo:
function creaTesto(){

        // creo i testi:
        titolo.textContent = images[currentImage].title;
        testo.textContent = images[currentImage].text;

}      


// FINE