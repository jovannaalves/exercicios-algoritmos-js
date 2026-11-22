const prompt = require('prompt-sync')();

function maiorNumero(a, b) {
    return a > b ? a : b;
}

let n1 = parseFloat(prompt("Número 1: "));
let n2 = parseFloat(prompt("Número 2: "));
console.log("Maior número:", maiorNumero(n1, n2));
