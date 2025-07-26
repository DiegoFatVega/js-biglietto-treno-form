/* Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

//Milestone 1
//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un 
//bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

const kmEl = document.getElementById('km-input');
const ageEl = document.getElementById('eta-input');
const priceEl = document.getElementById('ticket-price');

const formEl = document.querySelector('form');

formEl.addEventListener('submit', (e)=>{
   e.preventDefault();
    const kmElvalue = parseInt(kmEl.value);
    const ageElvalue = parseInt(ageEl.value);

    let price = 0.21 * kmElvalue;
    let discount;
    let finalPrice;


    if(ageElvalue < 18){
        discount = (price * 20)/100;
        finalPrice = price - discount;
    } else if (ageElvalue >= 65){
        discount = (price * 40)/100;
        finalPrice = price - discount;
    } else finalPrice = price;

    priceEl.textContent= finalPrice.toFixed(2) + " €";
    console.log(price);

})


