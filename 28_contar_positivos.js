const prompt = require('prompt-sync')();

let positivos = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseFloat(prompt(`Digite o ${i}º número: `));
    if (num > 0) positivos++;
}
console.log("Quantidade de positivos:", positivos);
