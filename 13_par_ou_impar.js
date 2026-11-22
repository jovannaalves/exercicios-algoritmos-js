const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");
