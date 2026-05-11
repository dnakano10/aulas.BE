//2. 
const input = require('readline-sync');
let n1 = input.question("Digite o 1° número: ");
let n2 = input.question("Digite o 2° número: ");
let soma = n1+n2;
let sub = n1-n2;
let mult = n1*n2;
let divs= n1/n2;

console.log("soma: ", n1, " + ", n2, " = ", soma);
console.log("subtração: ", n1, " - ", n2, " = ", sub);
console.log("multiplicação: ", n1, " * ", n2, " = ", mult);

if(n2===0){
    console.log("Não foi possível realizar essa divisão. Por favor insira um n´úmero diferente de 0.")
} else {
    console.log("divisão: ", n1, " / ", n2, " = ", divs);
}

//vou arrumar dps