// afspil video
const playIntroKnap = document.getElementById("playIntroKnap");
const video = document.getElementById("video");
const videoFrame = document.querySelector(".videoFrame");
// spring over
const springOverKnap = document.getElementById("springOverKnap");
const springOverBillede = document.getElementById("springOverBillede");
// muteknap
const muteKnap = document.getElementById("muteKnapIntro");
const muteIkon = document.getElementById("muteIkon");

// video
function playIntroFunktion() {
  video.style.display = "block"; // gør videoen synlig, når knappen trykkes
  video.play(); // starter videoen
  playIntroKnap.style.display = "none"; // skjuler playknappen

  // vis spring over/mute knap kun hvis videoen spiller
  if (video.paused === false) {
    springOverKnap.style.display = "flex";
    muteKnap.style.display = "block";
  }
}

playIntroKnap.addEventListener("click", playIntroFunktion);
playIntroKnap.addEventListener("touchstart", playIntroFunktion);

// mute knap funktion click/touchstart
function muteFunktion() {
  if (video.muted === true) {
    video.muted = false;
    muteIkon.src = "img/muteknap.png";
  } else {
    video.muted = true;
    muteIkon.src = "img/mute.png";
  }
}

muteKnap.addEventListener("click", muteFunktion);
muteKnap.addEventListener("touchstart", muteFunktion);

// skift til ny side, når videoen er færdig
video.addEventListener("ended", function () {
  window.location.href = "cyklus.html";
});

// skift side når spring over knap click/touchstart
function springOverFunktion() {
  window.location.href = "cyklus.html";
}

springOverBillede.addEventListener("click", springOverFunktion);
springOverBillede.addEventListener("touchstart", springOverFunktion);

// rotation af tekst
// finder HTML-elementet som skal rotere
const rotationWrapper = document.querySelector(".rotationWrapper");
// let-variable der starter en vinkelværdi på 0 grader (skal være let og ikke const, da den skal ændres med + 360 grader for hver rotation)
let angle = 0;

// sætter en interval funktion der kører hvert 10. sekund
setInterval(function () {
  angle += 360; // tilføjer 360 grader til vinklen hver gang (1 rotation)

  // opdaterer CSS transform-egenskaben med den nye vinkel
  // rotate(" + angle + "deg) (string) betyder: roter elementet med "angle" antal grader
  rotationWrapper.style.transform = "rotate(" + angle + "deg)";
}, 10000);
