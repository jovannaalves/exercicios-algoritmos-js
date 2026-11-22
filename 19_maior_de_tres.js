const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Número 1: "));
let n2 = parseFloat(prompt("Número 2: "));
let n3 = parseFloat(prompt("Número 3: "));
console.log("Maior:", Math.max(n1, n2, n3));
