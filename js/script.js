// - chiedere all'utente quanti anni ha e memorizzarli
// - chiedere all'utente quanti chilometri vuole percorrere e memorizzarli
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65

const containerEl = document.getElementById('main-container');
containerEl.style.backgroundColor = 'aqua';


const innerContainerEl = document.getElementById('inner-container');
// innerContainerEl.style.backgroundColor = 'coral';
// innerContainerEl.style.display = 'flex';
// innerContainerEl.style.justifyContent = 'space-between';
// innerContainerEl.style.alignItems = 'center';


let userAgeEl = document.getElementById("userAge");

let userKmEl = document.getElementById("userKm");

let userButtonEl = document.getElementById("userButton");

let userCancelEl = document. getElementById('userCancel');



userButtonEl.addEventListener('click', function() {
    let basicPrice = (parseFloat(userKm.value) * 0.21).toFixed(2);

    if(userAgeEl.value == 'minors') {
        console.log("L'utente ha diritto ad uno sconto del 20%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 20)).toFixed(2)} €.`);
    } else if(userAgeEl.value == 'seniors') {
        console.log("L'utente ha diritto ad uno sconto del 40%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 40)).toFixed(2)} €.`);
    } else {
        console.log("Il costo del biglietto è a prezzo pieno.")
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
    }

    userAgeEl.value = '';
    userKmEl.value = '';
    
})

userCancelEl.addEventListener('click', function() {
    userAgeEl.value = '';
    userKmEl.value = '';
})