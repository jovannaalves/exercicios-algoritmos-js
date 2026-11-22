const prompt = require('prompt-sync')();

let anoNasc = parseInt(prompt("Ano de nascimento: "));
let anoAtual = parseInt(prompt("Ano atual: "));
let idade = anoAtual - anoNasc;

if (idade <= 10) console.log("Infantil");
else if (idade <= 17) console.log("Juvenil");
else console.log("Adulto");
