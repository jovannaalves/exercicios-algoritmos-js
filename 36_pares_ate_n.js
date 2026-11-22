const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um número N: "));
for (let i = 0; i <= n; i += 2) {
    console.log(i);
}
