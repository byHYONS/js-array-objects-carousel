# ESERCIZIO: Carosello Array di Oggetti

> [!NOTE]
>
> nome repo: js-array-objects-carousel

Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
### Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.
### Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
### Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
### BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
### BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
### BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## Svolgimento:
1. definisco variabile di array d'oggetti;

2. definisco le variabili per la lettura del DOM;

3. assegno un valore iniziale su cui far funzionare il programma con `currentImage`;

4. definisco la funzione `function creaElementi(elemento, classe)` con cui andrò a costruire sia il contenitore principale e sia le foto miniature;

5. ciclo l'array d'oggetti con il metodo `forEach`, da cui ciclerà tutta la costruzione degli elementi:
```
images.forEach((element, index) => { ... }); 
```
6. costruisco il `div` che ospiterà l'elemento `img` e i due li appenderò all'elemento `items`.
Con una istruzione condizionale do la classe `active` al verificarsi della condizione:
```
if (curentImage === 0) contenitoreFoto.classList.add('active');
```
adremo anche a costruire un data-attribute con valore del suo indice. Questo dataset ci servirà in seguito per lo scorrimento delle voto tramite click sulle miniature:
```
div.dataset.index = index;
```

7. creerò la struttura per andare ad inserire il testo con `h2` e `p` che appenderò all'elemnto `items`.
Per il testo, visto che lo dovrò richiamare più di una volta, definisco una funzione `creaTesto()` dove andrò a prendere dall'array d'oggetti in `title` e `text` che cambieranno in base al `currentImage`;

8. vado, poi, in ascolto con `addEventListener` sui bottoni `prev = frecciaSu` e `next = frecciaGiu`

9. vado in lettura sui nuovi elementi creati con `querySelectorAll` per crearmi un nodeList che mi darà un indice dell'elemento;

11. leverò la classe `.active` sui nuovi elementi creati `item` e `thumb`;

12. attraverso una istruzione condizionale creeremo un **ciclo infinito**, faremo un decremento di `currentImage` senza farlo mai uscire mandandolo in errore:
```
if (currentImage > 0) {
        currentImage--;
    } else {
        currentImage = newItems.length - 1;
    }
```
e farome lo stesso con l'incremento `currentImage`:
 ```
if (currentImage < newItems.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;
    }
 ```

 13. aggiungo il testo con `createTesto()` sia per `fracciaSu` e sia per `frecciaGiu` e riassegno ad entrambi la classe `active` al nuovo `currentImage`:
 ```
creaTesto()
newItems[currentImage].classList.add('active');
newThumbs[currentImage].classList.add('active');
 ```

 14. vado in ascolto (event delegation) su tutto l'elemento parent `thumbs` (foto miniature) mettendo in ascolto l'evento `(e)` che poi permezzo del `e.target.parentElement.classList.contains` mi andrò a leggere solo l'ascolto che mi interessa, ovvero, `thumb`;

 15. ctramite istruzione condizionale andrò a mettere che se l'ascolto `thumb` sarà `true` dovrà rimuovere la classe `active`:
 ```
newItems[currentImage].classList.remove('active');
newThumbs[currentImage].classList.remove('active');
 ```
 dovrà assegnare un nuovo valore a `currentImage` che corrisponderà al numero stringa trasformato in numero con `parseInt` del `dataset` che abbiamo costruto in precedenza insieme con gli elementi:
 ```
const idx = parseInt(e.target.parentElement.dataset.index);
...
currentImage = idx;
 ```
 infine, andremo a riassegnare la classe `active` al nuovo `currentImage`.

 ##### FINE
