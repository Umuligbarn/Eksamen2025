// ------------------------------Variable---------------------------------

const ramme = document.querySelector(".videoramme");
const video = document.getElementById("video");
const afspil = document.getElementById("playknap");
const livmoder = document.getElementById("vinterLivmoder");
const tilbageknap = document.getElementById("tilbageknapVideo");
const mute = document.getElementById("muteVinterVideo");
const skygge = document.querySelector(".skygge");
const doneVideo = document.getElementById("doneVideo");
const doneVideoJa = document.getElementById("doneVideoJa");
const spilIgen = document.getElementById("spiligen");



// {Once : true}


//------------------- Åbn video -------------------------------

// Event listeners til playknappen
afspil.onclick = startVideo;
afspil.addEventListener("touchstart", startVideo);

function startVideo() {
    // Knap og livmoder fader ud
    afspil.style.animationName = "fadeUd";
    livmoder.style.animationName = "fadeUd";
    vinterMusik.pause();
    

    // Eventlistener på livmoder-animationen
    livmoder.addEventListener("animationend", AabnVideo);

    function AabnVideo() {
        // Video går fra cirkel til firkant, rammen udvides og placeres i midten, der kommer skygge
        video.style.borderRadius = "0";
        ramme.classList.toggle("videoAaben");
        skygge.classList.toggle("moerk");

        // Eventlistener på livmoder fjernes for at undgå loop
        livmoder.removeEventListener("animationend", AabnVideo);

        // Eventlistener på rammens transition ml. classerne
        ramme.addEventListener("transitionend", playVideo);

        // Video starter
        function playVideo() {
            video.play();

            //Tilbage- og muteknap fader ind
            tilbageknap.style.display = "inline-flex";
            tilbageknap.style.animationName = "fadeInd";

            mute.style.display = "inline-flex";
            mute.style.animationName = "fadeInd";

            //Eventlistener på ramme fjernes for at undgå loop
            ramme.removeEventListener("transitionend", playVideo);
        }
    }
}


//-------------------------- Luk video -------------------------------

// Event listeners til tilbageknappen
tilbageknap.onclick = stopVideo;
tilbageknap.addEventListener("touchstart", stopVideo);

function stopVideo() {
    // Video stopper og tilbageknap fader ud
    video.pause();
    tilbageknap.style.animationName = "fadeUd";
    mute.style.animationName = "fadeUd";

    // Eventlistener på tilbageknap animationen
    tilbageknap.addEventListener("animationend", lukVideo);
}

// Link til contains metoden
//https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

//------------------- Spørg om stop video -------------------------------
video.addEventListener("ended", askStopVideo);

function askStopVideo() {
    doneVideo.classList.toggle("visDoneVideo");
    tilbageknap.style.animationName = "fadeUd";

    doneVideoJa.addEventListener("click", lukVideo);

    spilIgen.addEventListener("click", replayVideo);

    function replayVideo() {
        doneVideo.classList.toggle("visDoneVideo");
        video.currentTime = 0;
        video.play();
        tilbageknap.style.animationName = "fadeInd";
        mute.style.animationName = "fadeInd";
    }
}


// LukVideo er en ekstern funktion, da den både skal kaldes ved stop Video og ved askStopVideo

function lukVideo() {

    // Video går fra firkant til cirkel, rammen skrumper og placeres til venstre og skygge fjernes
    if (doneVideo.classList.contains("visDoneVideo")) {
        doneVideo.style.animationName = "fadeUd";
        doneVideo.classList.toggle("visDoneVideo");
        mute.style.animationName = "fadeUd";

        mute.addEventListener("animationend", muteLukVideo);

        function muteLukVideo() {
            tilbageknap.style.display = "none";
            video.style.borderRadius = "500px";
            skygge.classList.toggle("moerk");
            ramme.classList.toggle("videoAaben");
            mute.removeEventListener("animationend", muteLukVideo);
        }
    }

    else {
        tilbageknap.style.display = "none";
        video.style.borderRadius = "500px";
        skygge.classList.toggle("moerk");
        ramme.classList.toggle("videoAaben");
    }


    // Eventlistener på tilbageknap fjernes for at undgå loop
    tilbageknap.removeEventListener("animationend", lukVideo);

    // Eventlistener på rammens transition ml. classerne
    ramme.addEventListener("transitionend", visKnap);

    function visKnap() {
        // knap og livmoder fader ind og video nulstilles
        afspil.style.animationName = "fadeInd";
        livmoder.style.animationName = "fadeInd";
        video.currentTime = 0;
        vinterMusik.play();

        // Eventlistener på tilbageknap fjernes for at undgå loop
        ramme.removeEventListener("transitionend", visKnap);
    }
}


//------------------- Mute video -------------------------------

mute.addEventListener("click", muteFunktion);

function muteFunktion() {
    if (video.muted === true) {
        video.muted = false;
        mute.src = "img/muteknap.png";
    } else {
        video.muted = true;
        mute.src = "img/mute.png";
    }
}

