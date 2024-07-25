import entradaDaddos from 'readline-sync'
//1 do exercicio while
/*let mutiplicador = entradaDaddos.questionInt(`Informe seu numero para ser multiplicado: `)
let cont= 0;
while(cont<=10){
    const resultado= mutiplicador*cont
    console.log (`${mutiplicador} x ${cont} = ${resultado}`)
    cont++
}*/

// 2 do exercicio while

let aluno = entradaDaddos.questionInt('digite o tanto de alunos: ')
let cont = 1
let mediaTurma = 0
while(cont<=aluno){
    let nota1 = entradaDaddos.questionFloat(`informe a nota do primeiro bimestre: ${cont}`)
    let nota2 = entradaDaddos.questionFloat(`informe a nota do segundo bimestre: ${cont}`)
    let nota3 = entradaDaddos.questionFloat(`informe a nota do terceiro bimestre: ${cont}`)
    let nota4 = entradaDaddos.questionFloat(`informe a nota do quarto bimestre: ${cont}`)

    let soma =(nota1+nota2+nota3+nota4) /4
    console.log(`sua media é: ${soma}`)

    mediaTurma += soma
    console.log(`${mediaTurma}`)
    cont++

    mediaTurma = mediaTurma/aluno
    console.log(`media da turma: ${mediaTurma}`)
}
