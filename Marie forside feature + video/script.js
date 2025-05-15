let pigeBilleder = [
  "img/megetked.png",
  "img/ked.png",
  "img/ligeglad.png",
  "img/glad.png",
  "img/megetglad.png",
];
let billedeIndex = 0;

function skiftPige() {
  billedeIndex++;
  document.getElementById("pige").src = pigeBilleder[billedeIndex];
}

function flytGenstand(id) {
  document.getElementById(id).style.visibility = "hidden";
  switch (id) {
    case "varmepude":
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
  skiftPige();
}
