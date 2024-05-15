// reset
'use strict';

// definisco variabili per la lettura del DOM:
const fotoPrinciale = document.querySelector('.items');
const fotoMiniature = document.querySelector('.thumbs');

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


let count = 0;

for (let element of images) {
    // FOTO PRINCIPALE
    // costruisco il div che ospiterà le foto, il titolo e il testo:
    const contenitoreFoto = document.createElement('div');
    contenitoreFoto.classList.add('item');
    if (count === 0) contenitoreFoto.classList.add('active');

    const immagine = document.createElement('img');
    immagine.src = `${element.image}`;

    const titolo = document.createElement('h2');
    titolo.textContent = `${element.title}`;
    
    const testo = document.createElement('p');
    testo.textContent = `${element.text}`;

    contenitoreFoto.append(titolo);
    contenitoreFoto.append(testo);
    contenitoreFoto.append(immagine);
    fotoPrinciale.append(contenitoreFoto);

    const fotoThumb = document.createElement('div');
    fotoThumb.classList.add('active');

    
   
    count++;

}