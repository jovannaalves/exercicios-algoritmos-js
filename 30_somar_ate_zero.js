const prompt = require('prompt-sync')();

let soma = 0;
let num;
while ((num = parseFloat(prompt("Digite um número (0 para encerrar): "))) !== 0) {
    soma += num;
}
console.log("Soma dos valores digitados:", soma);
