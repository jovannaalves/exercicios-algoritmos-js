const prompt = require('prompt-sync')();

let senha = prompt("Digite a senha numérica: ");
console.log(senha === "1234" ? "Acesso permitido" : "Acesso negado");
