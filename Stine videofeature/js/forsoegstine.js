// ------------------------------ Variabler ---------------------------------

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

// -------------------------- Hjælpefunktioner --------------------------------

// Kilde fadeIn og fadeOut funktionerne: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator 

function fadeIn(...elems) {
  elems.forEach(el => {
    el.style.display = el === mute ? "inline-block" : "inline-flex";
    el.style.animationName = "fadeInd";
  });
}

function fadeOut(...elems) {
  elems.forEach(el => el.style.animationName = "fadeUd");
}

function resetVideoUI() {
  tilbageknap.style.display = "none";
  video.style.borderRadius = "500px";
  skygge.classList.toggle("moerk");
  ramme.classList.toggle("videoAaben");
}

function visKnap() {
  fadeIn(afspil, livmoder);
  video.currentTime = 0;
  ramme.removeEventListener("transitionend", visKnap);
}

// ------------------------------ Åbn video --------------------------------

afspil.addEventListener("click", startVideo);
afspil.addEventListener("touchstart", startVideo);

function startVideo() {
  fadeOut(afspil, livmoder);

  livmoder.addEventListener("animationend", () => {
    video.style.borderRadius = "0";
    ramme.classList.toggle("videoAaben");
    skygge.classList.toggle("moerk");

    ramme.addEventListener("transitionend", () => {
      video.play();
      fadeIn(tilbageknap, mute);
    }, { once: true });
  }, { once: true });
}

// ------------------------------ Luk video --------------------------------

tilbageknap.addEventListener("click", stopVideo);
tilbageknap.addEventListener("touchstart", stopVideo);

function stopVideo() {
  video.pause();
  fadeOut(tilbageknap, mute);
  tilbageknap.addEventListener("animationend", lukVideo, { once: true });
}

function lukVideo() {
  if (doneVideo.classList.contains("visDoneVideo")) {
    doneVideo.style.animationName = "fadeUd";
    doneVideo.classList.remove("visDoneVideo");
    mute.style.animationName = "fadeUd";

    mute.addEventListener("animationend", () => {
      resetVideoUI();
    }, { once: true });
  } else {
    resetVideoUI();
  }

  ramme.addEventListener("transitionend", visKnap, { once: true });
}

// ------------------------------ Video slut & valg --------------------------

video.addEventListener("ended", askStopVideo);

function askStopVideo() {
  doneVideo.classList.add("visDoneVideo");
  fadeOut(tilbageknap);

  doneVideoJa.addEventListener("click", lukVideo, { once: true });

  spilIgen.addEventListener("click", () => {
    doneVideo.classList.remove("visDoneVideo");
    video.currentTime = 0;
    video.play();
    fadeIn(tilbageknap, mute);
  }, { once: true });
}

// ------------------------------ Mute funktion ------------------------------

mute.addEventListener("click", () => {
  video.muted = !video.muted;
  mute.src = video.muted ? "img/mute.png" : "img/muteknap.png";
});
