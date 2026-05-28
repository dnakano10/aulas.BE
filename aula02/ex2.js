//2. Crie ex02.js. Declare uma função validarSenha(senha) que retorna true se a senha tiver 8 ou mais caracteres e false caso contrário. Use senha.length para verificar o tamanho. Leia uma senha e exiba "Senha valida" ou "Senha fraca – minimo 8 caracteres".
const input = require('readline-sync');

function vS(senha) {
    return senha.length >= 8;
}
let senha = input.question("Digite a senha: ");

while (!vS(senha)) {
    console.log("Senha fraca - minimo 8 caracteres");
    senha = input.question("Digite a senha: ");
}

console.log("Senha valida");