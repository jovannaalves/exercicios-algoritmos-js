const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Número 1: "));
let n2 = parseFloat(prompt("Número 2: "));
if (n1 > n2) console.log("Maior:", n1);
else if (n2 > n1) console.log("Maior:", n2);
else console.log("Os números são iguais");
