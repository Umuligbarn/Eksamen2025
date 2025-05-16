/* Baggrundsmusik */

const efteraarMusik = document.getElementById("efteraarMusik");
const foraarMusik = document.getElementById("foraarMusik");
const sommerMusik = document.getElementById("sommerMusik");
const muteKnap = document.getElementById("muteKnap");

let musikStartet = false;
let muted = false; // Variabel der holder styr på om musikken er muted eller ej

// efterår musik

document.addEventListener("click", () => { // Når brugeren klikker på siden
    if (!musikStartet) { // Hvis musikken ikke allerede er startet
        efteraarMusik.play(); // Spiller musikken
        musikStartet = true; // Sætter musikStartet til true så musikken ikke starter igen
    }
});

muteKnap.addEventListener("click", (e) => { // Når mute knappen bliver klikket på
    e.stopPropagation(); // Forhindrer at mute-klikket også tæller som et klik på siden

    if (muted) {
        efteraarMusik.play(); // Spiller musikken hvis den er muted
        muteKnap.src = "img/muteknap.png"; // Skifter billedet til mute
    } else {
        efteraarMusik.pause(); // Pauser musikken hvis den ikke er muted
        muteKnap.src = "img/mute.png"; // Skifter billedet til unmute
    }
    muted = !muted; // Skifter værdien af muted til det modsatte
});

// Forår musik

document.addEventListener("click", () => { // Når brugeren klikker på siden
    if (!musikStartet) { // Hvis musikken ikke allerede er startet
        foraarMusik.play(); // Spiller musikken
        musikStartet = true; // Sætter musikStartet til true så musikken ikke starter igen
    }
});

muteKnap.addEventListener("click", (e) => { // Når mute knappen bliver klikket på
    e.stopPropagation(); // Forhindrer at mute-klikket også tæller som et klik på siden

    if (muted) {
        foraarMusik.play(); // Spiller musikken hvis den er muted
        muteKnap.src = "img/muteknap.png"; // Skifter billedet til mute
    } else {
        foraarMusik.pause(); // Pauser musikken hvis den ikke er muted
        muteKnap.src = "img/mute.png"; // Skifter billedet til unmute
    }
    muted = !muted; // Skifter værdien af muted til det modsatte
});

// Sommer musik

document.addEventListener("click", () => { // Når brugeren klikker på siden
    if (!musikStartet) { // Hvis musikken ikke allerede er startet
        sommerMusik.play(); // Spiller musikken
        musikStartet = true; // Sætter musikStartet til true så musikken ikke starter igen
    }
});

muteKnap.addEventListener("click", (e) => { // Når mute knappen bliver klikket på
    e.stopPropagation(); // Forhindrer at mute-klikket også tæller som et klik på siden

    if (muted) {
        sommerMusik.play(); // Spiller musikken hvis den er muted
        muteKnap.src = "img/muteknap.png"; // Skifter billedet til mute
    } else {
        sommerMusik.pause(); // Pauser musikken hvis den ikke er muted
        muteKnap.src = "img/mute.png"; // Skifter billedet til unmute
    }
    muted = !muted; // Skifter værdien af muted til det modsatte
});