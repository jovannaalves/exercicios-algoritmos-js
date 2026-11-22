const prompt = require('prompt-sync')();

let contador = 0;
let num;
while ((num = parseFloat(prompt("Digite um número (negativo para sair): "))) >= 0) {
    contador++;
}
console.log("Valores não negativos lidos:", contador);
