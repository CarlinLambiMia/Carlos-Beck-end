let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7,
}
console.log(`apartamento com ${apartamento.quartos} quartos localizado no ${apartamento.andar} andar da ${apartamento.endereco}`)

//2
let produtoEmbalado ={
    nome: 'Laptop HP',
    categotia: 'Eletrônicos',
    peso: 1.5, 
    preço: 3500.00,
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categotia}, pesando ${produtoEmbalado.peso} kg, esta a venda por R$ ${produtoEmbalado.preço}`)

//3
class imovel {
    quartos;
    tipo;
    endereço;
    exibirInfromações() {
        return `um ${this.tipo}, com ${this.quartos} quartos, no endeço ${this.endereço}`
    }
}

const Casa = new imovel(
    Casa.quartos = 4,
    Casa.tipo = 'Casa',
    Casa.endereço = '"Rua da Amizade, 789 - Bairro Alegre'
)

const Apartamento = new imovel(
    Apartamento.quartos = 2,
    Apartamento.tipo = 'Apartamento',
    Apartamento.endereço = 'Avenida da Paz, 123 - Centro'
)

