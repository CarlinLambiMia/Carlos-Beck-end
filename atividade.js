//1
var nome = 'Carlos';
var idade = 16;
console.log('ola, meu nome é',nome, 'e eu tenho' ,idade, 'anos');
//2
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
//3
console.log(typeof idade === "number")
//4
var peso = 55;
var altura = 1.65;
console.log(Math.ceil(peso/(altura*altura)))
//5
var num = 1;
var num2 = 2;
console.log(num+num2, num-num2, num*num2, num/num2)
//6
var idade1 = 20;
var idade2 = 19;
if (idade1>idade2) console.log('A primeira pessoa é mais velha que a outra')
if (idade1<idade2) console.log('A primeira pessoa é mais nova que a outra')
//7
/*var idade3 = 19;
if(idade3>=18) console.log('Pessoa é maior de idade')
if(idade3<18) console.log('Pessoa é menor de idade')*/

var idade4 = 18;
idade4>=18
?console.log('maior de idade')
:console.log('menor de idade')
//8
/*var numero = 2;
if(numero%2 ==0) console.log('è par')
if(numero%2 !=0) console.log('è impar')*/

var numero=11;
numero%2==0
?console.log('é par')
:console.log('é impar')