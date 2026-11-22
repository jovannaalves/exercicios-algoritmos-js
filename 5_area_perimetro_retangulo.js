const prompt = require('prompt-sync')();

let largura = parseFloat(prompt("Digite a largura do retângulo: "));
let comprimento = parseFloat(prompt("Digite o comprimento do retângulo: "));
console.log("Área:", largura * comprimento);
console.log("Perímetro:", 2 * (largura + comprimento));
