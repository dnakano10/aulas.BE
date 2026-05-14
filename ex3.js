//3.
const input = require('readline-sync');

let soma = 0;
for(let i = 0; i < 5; i++) {
    let n = input.questionInt("Digite o " + (i+1) + " valor: ");
    soma = soma + n;
}

let md = soma / 5;

if(md >= 7) {
    console.log("Aprovado com media: ", md);
} else if(md >= 5) {
    console.log("Recuperacao com media: ", md);
} else {
    console.log("Reprovado com media: ", md);
}