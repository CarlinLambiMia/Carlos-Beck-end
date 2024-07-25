import entradaDaddos from "readline-sync";

let nome = entradaDaddos.question("Digite seu nome: ");
console.log(`Óla, ${nome}`);

let x = entradaDaddos.questionFloat('digite seu 1 numero: ')
let y = entradaDaddos.questionFloat('digite seu 2 numero: ')
console.log(`R: ${x+y}`)

let idade = 18;
if(idade>= 18){
    console.log("Maior de idade");
}

else{
    console.log("Menor de idade");
}

//if(idade>=18) console.log("Maior de idade");
//(idade>=18) && console.log("maior de idade");
idade >= 18 ? "MAior de idade" : "Menor de idade";

let mes = entradaDaddos.question("Digite seu mes:")
switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Desenbro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês Invalido");
        break;
    }