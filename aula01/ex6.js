//6.
const input = require('readline-sync');

const senha = 42;
let tv = 0;

while(true){ 
    let chute = input.questionInt("Digite a senha: ")
    tv++;
    if(chute === senha) {
        console.log("Senha correta! Voce teve um total de ", tv, " tentativas.");
        break;
    } else {
        console.log("Senha incorreta! Tente novamente.");
    }
}