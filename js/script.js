// - chiedere all'utente quanti anni ha e memorizzarli
// - chiedere all'utente quanti chilometri vuole percorrere e memorizzarli
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65



let userAge = document.getElementById("userAge");

let userKm = document.getElementById("userKm");

let userButton = document.getElementById("userButton");

let basicPrice = (parseFloat(userKm.value) * 0.21);


userButton.addEventListener('click', function() {
    console.log(parseFloat(userKm.value) * 0.21);
    console.log(basicPrice);
    if(userAge.value < 18) {
        console.log("L'utente ha diritto ad uno sconto del 20%.");
        // console.log(basicPrice - (basicPrice / 100 * 20));


    } else if(userAge.value >= 65) {
        console.log("L'utente ha diritto ad uno sconto del 40%.");
    } else {
        console.log("Il costo del biglietto è a prezzo pieno.")
    }
    console.log(userAge.value);
    console.log(userKm.value);

    userAge.value = null;
    userKm.value = null;
    
})

// console.log(userAge.value);