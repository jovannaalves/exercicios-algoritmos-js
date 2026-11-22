const prompt = require('prompt-sync')();

let notas = [];
for (let i = 0; i < 8; i++) {
    notas.push(parseFloat(prompt(`Nota ${i + 1}: `)));
}
let media = notas.reduce((acc, n) => acc + n, 0) / 8;
let acimaOuIgual = notas.filter(n => n >= media).length;
console.log(`Média: ${media.toFixed(2)} | Notas >= média: ${acimaOuIgual}`);
