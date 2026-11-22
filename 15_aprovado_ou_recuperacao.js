const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Nota 1: "));
let n2 = parseFloat(prompt("Nota 2: "));
let media = (n1 + n2) / 2;
console.log(media >= 6 ? "Aprovado" : "Recuperação");
