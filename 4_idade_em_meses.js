const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a idade em anos: "));
console.log("Meses completos vividos:", idade * 12);
