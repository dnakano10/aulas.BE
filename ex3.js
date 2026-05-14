//3.
const input = require('readline-sync');

let soma = 0;
for(let i=0; i<5; i++) {
    let n = input.questionInt("Digite a " + (i+1) + " nota: ");
    soma = soma + n;
}

let md = soma/5;
if(md>=7) {
    console.log("Aprovado, media: ", md);
} else if(md>=5) {
    console.log("Recuperacao, media: ", md);
} else {
    console.log("Reprovado, media: ", md);
}