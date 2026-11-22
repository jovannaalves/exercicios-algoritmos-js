const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a idade: "));
if (idade >= 16 && idade <= 17) {
    console.log("Pode votar (voto facultativo: entre 16 e 17 anos)");
} else if (idade >= 18) {
    console.log("Pode votar (voto obrigatório: a partir de 18 anos)");
} else {
    console.log("Não pode votar");
}
