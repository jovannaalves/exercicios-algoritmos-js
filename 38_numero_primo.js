const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));
let ehPrimo = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        ehPrimo = false;
        break;
    }
}
console.log(ehPrimo ? "É primo" : "Não é primo");
