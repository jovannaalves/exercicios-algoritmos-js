const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um número N: "));
let soma = 0;
for (let i = 3; i <= n; i += 3) {
    soma += i;
}
console.log("Soma dos múltiplos de 3:", soma);
