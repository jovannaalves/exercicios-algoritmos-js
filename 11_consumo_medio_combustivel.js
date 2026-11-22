const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Distância percorrida (km): "));
let combustivel = parseFloat(prompt("Combustível gasto (litros): "));
console.log("Consumo médio:", (distancia / combustivel).toFixed(2), "km/l");
