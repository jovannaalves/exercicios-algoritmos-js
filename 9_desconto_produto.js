const prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Valor do produto: "));
let percDesconto = parseFloat(prompt("Percentual de desconto (%): "));
let desconto = valor * (percDesconto / 100);
console.log("Valor do desconto:", desconto);
console.log("Preço final:", valor - desconto);
