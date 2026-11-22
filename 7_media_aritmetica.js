const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Nota 1: "));
let n2 = parseFloat(prompt("Nota 2: "));
let n3 = parseFloat(prompt("Nota 3: "));
console.log("Média aritmética:", (n1 + n2 + n3) / 3);
