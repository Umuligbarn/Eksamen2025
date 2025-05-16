/* Klik spil feature lavet af Mia */

/* Variabel der henter billederne af pigen i et array i den rækkefølge de skal vises */
let pigeBilleder = ["img/megetked.png", "img/ked.png", "img/ligeglad.png", "img/glad.png", "img/megetglad.png"];
let billedeIndex = 0; // Variabel der holder styr på hvilket billede der vises, starter på 0 så det er det første billede der vises først

/* Funktion til at skifte billedet af pigen */
function skiftPige() {
    document.getElementById("pige").src = "img/glad.png"; //Starter med at vise hende glad inden den skifter billedet

    setTimeout(function () { // Sætter en timeout på 1 sekund før den skifter billedet
        billedeIndex++; // Øger indexet med 1
        document.getElementById("pige").src = pigeBilleder[billedeIndex]; // Skifter billedet til det næste i arrayet
    }, 1000);
}


document.getElementById("varmepude").addEventListener("click", () => {
    flytGenstand("varmepude");
});

document.getElementById("chokolade").addEventListener("click", () => {
    flytGenstand("chokolade");
});

document.getElementById("pude").addEventListener("click", () => {
    flytGenstand("pude");
});

document.getElementById("bind").addEventListener("click", () => {
    flytGenstand("bind");
});



/* Funktion til at flytte genstandende fra deres boks over på pigen */
function flytGenstand(id) { //funktionen tager "id" som dens parameter, som er id'et på den genstand der bliver klikket på
    document.getElementById(id).style.visibility = "hidden"; // Gør genstanden usynlig, så den ikke kan ses men stadig fylder pladsen ud
    switch (id) { //switch statement der tjekker hvilket id der er blevet klikket på
        case "varmepude": // Hvis id'et er "varmepude", vises varmepuden på pigen osv.
            document.getElementById("varmepude-flyttet").style.display = "block"; 
            break;
        case "chokolade":
            document.getElementById("chokolade-flyttet").style.display = "block";
            break;
        case "pude":
            document.getElementById("pude-flyttet").style.display = "block";
            break;
        case "bind":
            document.getElementById("bind-flyttet").style.display = "block"; 
            break;
    }
    skiftPige(); // Kalder funktionen skiftPige() for at skifte billedet af pigen
    document.getElementById("succesLyd").play();
    document.getElementById("juhuLyd").play();
}




/* Feature til at få genstandende til at poppe ud hvis brugeren ikke har interageret med siden i 10 sekunder */

let timer; // variabel til at holde styr på nedtællingen

function startTimer() { // funktion til at starte timeren, den starter timeren når brugeren kommer ind på siden eller hvis der ikke er interageret med siden i 10 sekunder
    clearTimeout(timer); // Stopper timeren hvis den allerede kører
    timer = setTimeout(popGenstande, 10000); // Starter en ny timer der kører i 10 sekunder. Når tiden er gået, kaldes funktionen popGenstande()
}

// funktionen der popper genstandene ud
function popGenstande() {
    const genstande = document.querySelectorAll(".genstande img"); // Henter alle img elementerne i den div der har classen "genstande"

    genstande.forEach((genstand, i) => { // Går igennem hver genstand én ad gangen. "i" er indexet på genstanden i arrayet
        setTimeout(() => { // Tilføjer en timeout til hver genstand så de popper ud en ad gangen
            genstand.classList.add("pop"); // Tilføjer klassen "pop" (som er i css) til genstanden så den popper ud

        setTimeout(() => { // Tilføjer en timeout til hver genstand så den popper ind igen
            genstand.classList.remove("pop"); // Fjerner klassen "pop" (som er i css) fra genstanden så den popper ind igen
        }, 1000); //  // Efter 1 sekund fjernes klassen "pop" fra genstanden så den popper ind igen
        }, i * 1000); // "i" er indexet på genstanden i arrayet, så den første genstand popper ud efter 0 sekunder, den anden efter 1 sekund osv. På den måde popper de ud én ad gangen
    });

    startTimer(); // Starter timeren forfra efter genstandene er blevet vist
}

["mousemove", "click", "touchstart"].forEach(event => { 
    document.addEventListener(event, startTimer); // Hvis brugeren bevæger musen, klikker eller rører ved skærmen starter funktionen startTimer() igen
});

startTimer(); // Starter timeren når siden indlæses





/* Baggrundsmusik */

const vinterMusik = document.getElementById("vinterMusik");
const muteKnap = document.getElementById("muteKnap");

let musikStartet = false;
let muted = false; // Variabel der holder styr på om musikken er muted eller ej

document.addEventListener("click", () => { // Når brugeren klikker på siden
    if (!musikStartet) { // Hvis musikken ikke allerede er startet
        vinterMusik.play(); // Spiller musikken
        musikStartet = true; // Sætter musikStartet til true så musikken ikke starter igen
    }
});

muteKnap.addEventListener("click", (e) => { // Når mute knappen bliver klikket på
    e.stopPropagation(); // Forhindrer at mute-klikket også tæller som et klik på siden

    if (muted) {
        vinterMusik.play(); // Spiller musikken hvis den er muted
        muteKnap.src = "img/muteknap.png"; // Skifter billedet til mute
    } else {
        vinterMusik.pause(); // Pauser musikken hvis den ikke er muted
        muteKnap.src = "img/mute.png"; // Skifter billedet til unmute
    }
    muted = !muted; // Skifter værdien af muted til det modsatte
});




