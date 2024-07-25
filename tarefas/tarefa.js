//atv 1 while
import input from 'readline-sync';
/*
let numero = input.questionInt("Enter a number: ");
let a = 1;

while (a <= 10) {
  console.log(numero + " x " + a + " = " + numero * a);
  a++;
}

//atv 2 while
let estudantes = input.questionInt("Qual o numero de estudantes: ");
let b = 0;
let contaAlunos = 0;

while (contaAlunos < estudantes) {
  let notas = input.questionFloat(`coloque sua 4 notas do ano: " + ${contaAlunos+1}`);
  b += notas;
  contaAlunos++;
}

let soma = b / (estudantes * 4);

console.log("Media da classe: " + soma);

//atv 1 do while
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let usuario;
  
do {
  usuario = input.questionInt("Fale um numero de 1 a 100:");
  if (usuario === numeroAleatorio) {
    console.log('Parabéns! vc acertou!!!!')
  } else if (usuario < numeroAleatorio) {
    console.log("Tente um numero maior!");
  } else{
    console.log("Tente um numro menor")
  }
} while (usuario !== numeroAleatorio);
  
console.log("Parabens voce acertou o numero!");

//atv 1 for
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let i = 0; i < 20; i++) {
  let nextNum = num1 + num2;
  
  console.log(nextNum);
  
  num1 = num2;
  num2 = nextNum;
}

//atv 2 for
let ImpostoTotal= 0; 
let pessoa = 0;

for (let i = 0; i < 10; i++) {
  const name = input.question(`Fale o seu nome pessoa = ${i+1}:`);
  const salario = input.questionFloat(`Fale o seu salario ${name}:`);

  let imposto = 0;
  if (salario <= 2000) {
  } else if (salario <= 2800) {
    imposto = salario * 0.075;
  } else if (salario <= 3750) {
    imposto = salario * 0.15;
  } else if (salario <= 4660) {
    imposto = salario * 0.225;
  } else {
    imposto = salario * 0.275;
  }

  console.log(name + " R$ " + imposto.toFixed(2) + " Seu imposto de renda.");

  ImpostoTotal += imposto;
  pessoa++;
}

console.log("Total da taxa R$ " + ImpostoTotal.toFixed(2) + ".");
console.log("a liquides média do imposto de renda é" + (ImpostoTotal / pessoa).toFixed(2) + "%.");*/

//atv 1 for in e for of
const pessoas = {
  nome:'joão',
  idade:30,
  cidade:'Vilhena'
};

for(let chave in pessoas) {
  console.log(`${chave}: ${pessoas[chave]}`);
}

//atv 2 for in e for of
const ele = [
  'Barnco','preto','esmeralda','netherita'
]
for(let cor of ele){
  console.log(cor)
}

//atv3 for in e for of
