const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 10; i++) {
    vetor.push(parseFloat(prompt(`Número ${i + 1}: `)));
}
let maior = Math.max(...vetor);
let posicao = vetor.indexOf(maior);
console.log(`Maior valor: ${maior} | Posição (índice): ${posicao}`);
