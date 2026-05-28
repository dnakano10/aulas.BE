//4. Crie ex04.js. Declare uma função executarOperacao(a, b, operacao) que recebe dois números e uma função como terceiro parâmetro. Dentro dela, chame operacao(a, b) e exiba o resultado. Teste passando diferentes Arrow Functions como terceiro argumento:
const input = require('readline-sync');

const exOp = (a, b, op) => {
    const resultado = op(a, b);
    console.log(`Resultado: ${resultado}`);
};

const n1 = input.question("");
const n2 = input.question("");

exOp(Number(n1), Number(n2), (a, b) => a+b);
exOp(Number(n1), Number(n2), (a, b) => a*b);
exOp(Number(n1), Number(n2), (a, b) => a-b);