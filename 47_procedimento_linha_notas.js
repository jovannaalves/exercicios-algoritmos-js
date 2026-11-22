const prompt = require('prompt-sync')();

function mostrarLinha() {
    console.log("-".repeat(30));
}

let n1 = parseFloat(prompt("Nota 1: "));
let n2 = parseFloat(prompt("Nota 2: "));
let media = (n1 + n2) / 2;

mostrarLinha();
console.log("RELATÓRIO DE NOTAS");
mostrarLinha();
console.log("Nota 1:", n1);
console.log("Nota 2:", n2);
console.log("Média Final:", media.toFixed(1));
mostrarLinha();
