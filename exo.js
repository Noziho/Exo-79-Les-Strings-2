let pomme = "Elle est belle ma pomme !";
console.log(pomme.length);
let indexPomme = document.getElementById("index-pomme");
indexPomme.innerText = pomme.indexOf("pomme");

let lastIndex = document.getElementById("last-index-m");
lastIndex.innerText = pomme.lastIndexOf("m");

if (pomme.startsWith("Elle")) {
    console.log("Elle est belle ma pomme ! Commence par Elle");
}

if (pomme.endsWith("!")) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

document.getElementById("pomme").innerText = pomme.substring(17, 23);

console.log(pomme [0]);

for (let i = 0; i < pomme.length; i++) {
    pomme.split("");
    document.getElementById("one-line").innerHTML += (pomme[i] + "<br>");

}