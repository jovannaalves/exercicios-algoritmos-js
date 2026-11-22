const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Nota 1 (peso 2): "));
let n2 = parseFloat(prompt("Nota 2 (peso 3): "));
let n3 = parseFloat(prompt("Nota 3 (peso 5): "));
let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
console.log("Média ponderada:", media);
