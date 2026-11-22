const prompt = require('prompt-sync')();

let nota;
do {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10: "));
} while (nota < 0 || nota > 10);
console.log("Nota válida digitada:", nota);
