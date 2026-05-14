//5.
const input = require('readline-sync');

let p = 0;
let ip = 0;

for(let i=0; i<10; i++) {
    let n = input.questionInt("Digite o " + (i+1) + " numero inteiro: ");
    if(n%2===0) {
        p++;
        console.log("O numero ", n, " é par.");
    } else {
        ip++;
        console.log("O numero ", n, " é impar.");
    }
}

console.log("Foram digitados ", p, " numeros pares");
console.log("Foram digitados ", ip, " numeros impares");