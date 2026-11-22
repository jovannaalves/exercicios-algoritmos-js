const prompt = require('prompt-sync')();

function ehPar(numero) {
    return numero % 2 === 0;
}

let n = parseInt(prompt("Digite um número inteiro: "));
console.log("É par?", ehPar(n));
