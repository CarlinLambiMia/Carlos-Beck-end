import input from 'readline-sync'

//Carlos Eduardo Gomes de Oliveira e Vitor Gabriel Capelleto 

console.log('insira o numero que se refere a forma geométrica desejada ou sair: \n 1.Retângulo\n 2.Triângulo \n 3.Cículo \n 4.Sair');

let opicao = input.question('digite se voce quer calcular a area de qual forma geométrica: ');

function geoRe(base, altura) {
    var altura = input.questionInt('digite a altura de sua forma geométrica retângular: ');
    var base = input.questionInt('digite sua base da forma geométrica retângular: ');
    return console.log('o resultado da área do retângulo será de:'),base * altura;
}

function geoTri(base, altura) {
    var altura = input.questionInt('digite a altura de sua forma geométrica triângular: ');
    var base = input.questionInt('digite sua base da forma geométrica triângular: ');
    return console.log('o resultado da área do triângulo será de:'), base * altura /2;
}

function geoCir(raio) {
   var raio = input.questionInt('digitre o raio do circulo: ');
    return console.log(`a área do circulo será de:`), 3.1415 * raio*raio;
}


switch (opicao) {
    case "1":
        console.log(geoRe(`o resultado da área largura X altura do triângulo será de: `));
        break;
    case "2": 
        console.log(geoTri(`a soma de base X altura de um triângulo equivale a área de: `));
        break;
    case "3":
        console.log(geoCir(`o calculo do raio par descobrir a área é de: `));
        break;
    case "4":
        break;
    default:
        console.log('essa função não existe!');
        break;
}