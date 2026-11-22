const prompt = require('prompt-sync')();

let nomes = [];
let medias = [];
let aprovados = 0;

for (let i = 0; i < 5; i++) {
    nomes.push(prompt(`Nome do ${i + 1}º aluno: `));
    let n1 = parseFloat(prompt("Nota 1: "));
    let n2 = parseFloat(prompt("Nota 2: "));
    let n3 = parseFloat(prompt("Nota 3: "));
    
    let media = (n1 + n2 + n3) / 3;
    medias.push(media);
    if (media >= 6) aprovados++;
}

console.log("\n--- RESULTADO DA TURMA ---");
for (let i = 0; i < 5; i++) {
    console.log(`${nomes[i]} - Média: ${medias[i].toFixed(1)}`);
}
console.log("Maior média da turma:", Math.max(...medias).toFixed(1));
console.log("Quantidade de aprovados:", aprovados);
