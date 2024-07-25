/*let contador = 0;

while (contador < 10) {
    console.log(`é menor`)
    contador ++;
}
let mutiplicador = 8;

for(let contador = 0; contador<=10, contador++) {
    const resultado= mutiplicador*contador
    console.log = mutiplicador+ 'x' +contador+ '=' +resultado
}*/
/*
let funcionarios = [
    { id:1, nome:'César', habilitado: false},
    { id:2, nome:'Jéssica', habilitado: false},
    { id:3, nome:'renan', habilitado: true},
    { id:4, nome:'Marlon', habilitado: false},
    { id:5, nome:'Ana', habilitado: false},
];

let contador = 0;
let encontrouHabilidade = false;

while(contador < funcionarios.length) {
    let funcionario = funcionarios[contador];
    if(funcionario.habilitado == true) {
        console.log("funcionario habilitado encontrado: " + funcionario.nome)
        encontrouHabilidade = true;
        break;
    }
    contador++
}*/

const pessoa = {
    nome:'carlos',
    idade:'16',
    gmail:'cego.judo@gmail.com'
}
/*
for(let dados in pessoa) {
    console.log(pessoa.gmail)
    break
}
*/
for(let dados in pessoa) {
    console.log(pessoa[dados])
}