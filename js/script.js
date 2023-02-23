// - chiedere all'utente quanti anni ha e memorizzarli
// - chiedere all'utente quanti chilometri vuole percorrere e memorizzarli
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65

const body = document.querySelector('body');
body.style.backgroundColor = 'aqua';


const container = document.getElementById('container');
container.style.margin = 'auto';
container.style.maxWidth = '1000px';
container.style.display = 'flex';
container.style.justifyContent = 'space-between';




let userAge = document.getElementById("userAge");

let userKm = document.getElementById("userKm");

let userButton = document.getElementById("userButton");

let userCancel = document. getElementById('userCancel');



userButton.addEventListener('click', function() {
    let basicPrice = (parseFloat(userKm.value) * 0.21).toFixed(2);

    if(userAge.value == 'minors') {
        console.log("L'utente ha diritto ad uno sconto del 20%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 20)).toFixed(2)} €.`);
    } else if(userAge.value == 'seniors') {
        console.log("L'utente ha diritto ad uno sconto del 40%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 40)).toFixed(2)} €.`);
    } else {
        console.log("Il costo del biglietto è a prezzo pieno.")
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
    }

    userAge.value = null;
    userKm.value = null;
    
})

userCancel.addEventListener('click', function() {
    userAge.value = null;
    userKm.value = null;
})