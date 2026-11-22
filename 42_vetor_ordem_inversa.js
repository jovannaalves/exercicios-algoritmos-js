const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 10; i++) {
    vetor.push(parseFloat(prompt(`Número ${i + 1}: `)));
}
console.log("Ordem inversa:", vetor.reverse().join(", "));
