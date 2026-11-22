const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um número N para ver a tabuada: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
