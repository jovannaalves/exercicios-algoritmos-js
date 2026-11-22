const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Peso (kg): "));
let altura = parseFloat(prompt("Altura (m): "));
let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));
if (imc < 18.5) console.log("Abaixo do peso");
else if (imc <= 24.9) console.log("Normal");
else if (imc <= 29.9) console.log("Sobrepeso");
else console.log("Obesidade");
