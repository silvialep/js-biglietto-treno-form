// - chiedere all'utente quanti anni ha e memorizzarli
// - chiedere all'utente quanti chilometri vuole percorrere e memorizzarli
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65



let userAge = document.getElementById("userAge");

let userKm = document.getElementById("userKm");

let userButton = document.getElementById("userButton");


userButton.addEventListener('click', function() {
    if(userAge.value < 18) {
        console.log("Lo sconto è del 20%");
    } else if(userAge.value >= 65) {
        console.log("Lo sconto è del 40%");
    }
    
    // window.location.reload();
})

// console.log(userAge.value);