const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let n2 = parseInt(prompt("Digite o segundo número inteiro: "));
console.log("Produto:", n1 * n2);
console.log("Quociente inteiro:", Math.floor(n1 / n2));
console.log("Resto da divisão:", n1 % n2);
