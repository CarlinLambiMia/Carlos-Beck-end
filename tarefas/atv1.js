import entradaDaddos from "readline-sync";
//atividade 1
let dia = entradaDaddos.questionInt("Digite um dia numero de 1 a 7:")
switch (dia) {
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta")
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log("Não existe esse dia da semana!!")
        break;
}
//atividade 2
let mes = entradaDaddos.questionInt("Digite um mes de 1 a 12:")
switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Setembro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Desenbro")
        break;
        
    default:
        console.log("Não existe numero do mes!!")
        break;
}
//atividade 3
let operacao = entradaDaddos.question("Digite o tipo de operacao que vc quer fazer:")
let x = entradaDaddos.questionFloat('digite seu 1 numero: ')
let y = entradaDaddos.questionFloat('digite seu 2 numero: ')
switch(operacao){
    case "adicao":
        console.log(`Valor sera: ${x+y}`);
        break;
   case "subitracao":
        console.log(`Valor sera: ${x-y}`);
        break;
   case "multiplicasao":
        console.log(`Valor sera: ${x*y}`);
        break;
    case "divisao":
        console.log(`Valor sera: ${x/y}`);
        break;
}
// atividade 4
let bonificacao = entradaDaddos.question('Digite a sua categoria:')
let salario = entradaDaddos.questionFloat("Digite seu atual salario: ")
switch (bonificacao) {
    case "a":
        console.log(`Seu novo salario será: ${((5/100) * salario) + salario}`)
        break;
    case "b":
        console.log(`Seu novo salario será: ${((10/100) * salario) + salario}`)
        break;
    case "c":
        console.log(`Seu novo salario será: ${((15/100) * salario) + salario}`)
        break;
    case "d":
        console.log(`Seu novo salario será: ${((20/100) * salario) + salario}`)
        break;

    default:
        console.log("categoria invalida!!")
        break;
}