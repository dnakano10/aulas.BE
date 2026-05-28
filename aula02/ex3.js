//3. Reescreva as funções do Exercício 1 usando Arrow Functions. O comportamento deve ser idêntico.
const input = require('readline-sync');

const soma = (a, b) => a+b;
const sub = (a, b) => a-b;
const mult = (a, b) => a*b;
const div = (a, b) => {
    if(b === 0) {
        return "Erro: divisao por zero";
    } else {
        return a/b;
    }
};

const n1 = input.question("");
const n2 = input.question("");

console.log(`soma: ${soma(Number(n1), Number(n2))}`);
console.log(`subtração: ${sub(Number(n1), Number(n2))}`);
console.log(`multiplicação: ${mult(Number(n1), Number(n2))}`);
console.log(`divisão: ${div(Number(n1), Number(n2))}`);