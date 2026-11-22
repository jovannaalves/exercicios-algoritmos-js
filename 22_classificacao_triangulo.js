const prompt = require('prompt-sync')();

let l1 = parseFloat(prompt("Lado 1: "));
let l2 = parseFloat(prompt("Lado 2: "));
let l3 = parseFloat(prompt("Lado 3: "));

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
    if (l1 === l2 && l2 === l3) console.log("Triângulo Equilátero");
    else if (l1 === l2 || l1 === l3 || l2 === l3) console.log("Triângulo Isósceles");
    else console.log("Triângulo Escaleno");
} else {
    console.log("Os lados não formam um triângulo");
}
