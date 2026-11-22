const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um número inteiro positivo: "));
let fatorial = 1;
for (let i = 2; i <= n; i++) {
    fatorial *= i;
}
console.log(`Fatorial de ${n}:`, fatorial);
