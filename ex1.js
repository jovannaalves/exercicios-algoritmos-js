// 1. Soma de dois inteiros
let n1 = parseInt(prompt("Número 1:"));
let n2 = parseInt(prompt("Número 2:"));
console.log("Soma:", n1 + n2);

// 2. Subtração de dois reais
let a = parseFloat(prompt("Número 1:"));
let b = parseFloat(prompt("Número 2:"));
console.log("Subtração:", a - b);

// 3. Produto, quociente e resto da divisão inteira
let x = parseInt(prompt("Número 1:"));
let y = parseInt(prompt("Número 2:"));
console.log("Produto:", x * y);
console.log("Quociente:", Math.floor(x / y));
console.log("Resto:", x % y);

// 4. Meses completos vividos
let idade = parseInt(prompt("Idade:"));
console.log("Meses vividos:", idade * 12);

// 5. Área e perímetro do retângulo
let largura = parseFloat(prompt("Largura:"));
let comprimento = parseFloat(prompt("Comprimento:"));
console.log("Área:", largura * comprimento);
console.log("Perímetro:", 2 * (largura + comprimento));

// 6. Celsius para Fahrenheit
let celsius = parseFloat(prompt("Temperatura em Celsius:"));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Fahrenheit:", fahrenheit);