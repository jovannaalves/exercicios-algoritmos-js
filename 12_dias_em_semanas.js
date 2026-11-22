const prompt = require('prompt-sync')();

let totalDias = parseInt(prompt("Quantidade de dias: "));
let semanas = Math.floor(totalDias / 7);
let diasRestantes = totalDias % 7;
console.log(`${semanas} semana(s) inteira(s) e ${diasRestantes} dia(s) restante(s)`);
