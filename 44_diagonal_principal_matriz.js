const prompt = require('prompt-sync')();

let matriz = [];
let somaDiagonal = 0;
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseFloat(prompt(`Elemento [${i}][${j}]: `));
        if (i === j) somaDiagonal += matriz[i][j];
    }
}
console.log("Soma da diagonal principal:", somaDiagonal);
