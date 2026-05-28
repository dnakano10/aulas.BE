//4.
const input = require('readline-sync');

let tab = input.questionInt("Digite a tabuada que deseja: ");

for(let i=1; i<=10; i++) {
    console.log(tab + " x " + i + " = " + (tab*i));
}
