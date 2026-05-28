//1. Crie ex01.js. Declare quatro funções: somar, subtrair, multiplicar e dividir. Cada uma recebe dois parâmetros e retorna o resultado. Para dividir, retorne a string "Erro: divisao por zero" se o segundo parâmetro for zero. Ao final, leia dois números e exiba os quatro resultados.
const input = require('readline-sync');

function soma(a, b) {
    return a+b;
}
function sub(a, b) {
    return a-b;
}
function mult(a, b) {
    return a*b;
}
function div(a, b) {
    if(b === 0) {
        return "Erro: divisao por zero";
    } else {
        return a/b;
    } 
}

const n1 = input.question("");
const n2 = input.question("");

console.log(`soma: ${soma(Number(n1), Number(n2))}`);
console.log(`subtração: ${sub(Number(n1), Number(n2))}`);
console.log(`multiplicação: ${mult(Number(n1), Number(n2))}`);
console.log(`divisão: ${div(Number(n1), Number(n2))}`);