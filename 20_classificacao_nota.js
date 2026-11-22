const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));
if (nota < 5) console.log("Insuficiente");
else if (nota < 7) console.log("Regular");
else if (nota < 9) console.log("Bom");
else console.log("Excelente");
