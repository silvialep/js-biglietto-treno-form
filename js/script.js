// - chiedere all'utente quanti anni ha e memorizzarli
// - chiedere all'utente quanti chilometri vuole percorrere e memorizzarli
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65

let containerEl = document.getElementById('main-container');
containerEl.style.backgroundColor = 'brown';
containerEl.style.height = '1000px';


let userNameEl = document.getElementById('userName');
userNameEl.style.display = 'flex';
userNameEl.style.flexDirection = 'column';
userNameEl.style.alignItems = 'center';

let userAgeEl = document.getElementById("userAge");
userAgeEl.style.display = 'flex';
userAgeEl.style.flexDirection = 'column';
userAgeEl.style.alignItems = 'center';

let userKmEl = document.getElementById("userKm");
userKmEl.style.display = 'flex';
userKmEl.style.flexDirection = 'column';
userKmEl.style.alignItems = 'center';



let userButtonEl = document.getElementById("userButton");

let userCancelEl = document.getElementById('userCancel');




userButtonEl.addEventListener('click', function() {
    let ticketContainerEl = document.getElementById('ticket-container');
    ticketContainerEl.style.display = 'block';
    let basicPrice = (parseFloat(userKm.value) * 0.21).toFixed(2);
    
    let ticketDiscountEl = document.querySelector('ticket-discount');
    let ticketCoachEl = document.querySelector('ticket-coach');
    let ticketCodeEl = document.querySelector('ticket-code');
    let ticketPriceEl = document.querySelector('ticket-price');
    
    let ticketUserNameEl = document.querySelector('ticket-user-name');
    ticketUserNameEl.innerHTML = document.getElementById('userName').value;
    
    if(userAgeEl.value == 'minors') {
        console.log("L'utente ha diritto ad uno sconto del 20%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 20)).toFixed(2)} €.`);
        ticketDiscountEl.innerHTML = basicPrice - (basicPrice / 100 * 20).toFixed(2);

    } else if(userAgeEl.value == 'seniors') {
        console.log("L'utente ha diritto ad uno sconto del 40%.");
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
        console.log(`Il prezzo scontato è di ${(basicPrice - (basicPrice / 100 * 40)).toFixed(2)} €.`);
    } else {
        console.log("Il costo del biglietto è a prezzo pieno.")
        console.log(`Il prezzo pieno è di ${basicPrice} €.`)
    }

    // userAgeEl.value = '';
    // userKmEl.value = '';
    
})

userCancelEl.addEventListener('click', function() {
    window.location.reload();
})