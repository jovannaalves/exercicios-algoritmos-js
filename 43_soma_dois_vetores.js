const prompt = require('prompt-sync')();

let vetorA = [], vetorB = [], vetorSoma = [];
for (let i = 0; i < 5; i++) vetorA.push(parseFloat(prompt(`Vetor A [${i}]: `)));
for (let i = 0; i < 5; i++) vetorB.push(parseFloat(prompt(`Vetor B [${i}]: `)));
for (let i = 0; i < 5; i++) vetorSoma.push(vetorA[i] + vetorB[i]);
console.log("Vetor soma:", vetorSoma);
