const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += parseFloat(prompt(`Digite o ${i}º número: `));
}
console.log("Soma total:", soma);
