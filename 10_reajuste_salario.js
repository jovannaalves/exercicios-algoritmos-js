const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Salário atual: "));
let percReajuste = parseFloat(prompt("Percentual de reajuste (%): "));
let novoSalario = salario + (salario * (percReajuste / 100));
console.log("Novo salário:", novoSalario);
