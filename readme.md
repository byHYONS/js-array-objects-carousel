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
1. definisco variabile di arrey d'oggetti;
2. definisco le variabili per la lettura del DOM;
3. ciclo l'arrey d'oggetti con il coclo for...of:
```
for (let element of images) { ... }
```
4. costruisco il div che ospiterà le foto, il titolo e il testo, aggiungendo la classe del div.
Con una istruzione condizionale do la classe `active` al verificarsi della condizione:
```
if (count === 0) contenitoreFoto.classList.add('active');
```
5. vado in ascolto sui nuovi elementi creati con `querySelectorAll` per crearmi un nodeList che poi andrò a ciclare con il `forEach`. Leverò la classe `.active` e impostero una condizione per riattivare la classe:
```

```