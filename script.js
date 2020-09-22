import { without } from "lodash";

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

body.style.background = "linear-gradient(to right, #0C1BED, #A7C318)";
css.textContent = body.style.background;


//CREATING RANDOMIZE BUTTON
var randomBtn = document.createElement("button");
body.append(randomBtn);
randomBtn.innerHTML = "Randomize";
randomBtn.classList.add("randomBtn");

randomBtn.addEventListener("click", () => {
    var c1 = Math.floor(Math.random() * 255);
    var c2 = Math.floor(Math.random() * 255);
    var c3 = Math.floor(Math.random() * 255);
    var c4 = Math.floor(Math.random() * 255);
    var c5 = Math.floor(Math.random() * 255);
    var c6 = Math.floor(Math.random() * 255);

    body.style.background = body.style.background = `linear-gradient(to right, rgb(${c1}, ${c2}, ${c3}), rgb(${c4}, ${c5}, ${c6}))`;
    css.textContent = body.style.background;
});

// color1.addEventListener("input", function () {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", function () {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

