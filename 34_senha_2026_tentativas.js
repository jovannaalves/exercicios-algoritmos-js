const prompt = require('prompt-sync')();

let acertou = false;
for (let tentativa = 1; tentativa <= 3; tentativa++) {
    let senha = prompt(`Tentativa ${tentativa}/3 - Digite a senha: `);
    if (senha === "2026") {
        acertou = true;
        break;
    }
}
console.log(acertou ? "Acesso permitido" : "Acesso bloqueado");
