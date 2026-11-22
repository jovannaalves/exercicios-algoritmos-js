const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma += parseFloat(prompt(`Nota ${i}: `));
}
console.log("Média da turma:", soma / 5);
