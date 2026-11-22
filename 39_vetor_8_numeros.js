const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 8; i++) {
    vetor.push(parseFloat(prompt(`Número ${i + 1}: `)));
}
console.log("Números na ordem de leitura:", vetor.join(", "));
