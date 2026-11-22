const prompt = require('prompt-sync')();

let maiores = 0;
let idade;
while ((idade = parseInt(prompt("Idade (0 para encerrar): "))) !== 0) {
    let sexo = prompt("Sexo (M/F): ");
    if (idade >= 18) maiores++;
}
console.log("Quantidade de maiores de idade:", maiores);
