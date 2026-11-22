const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite um código de 1 a 7: "));
const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
console.log(dias[codigo - 1] || "Inválido");
