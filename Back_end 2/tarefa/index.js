const express = require('express')
const colecaoUf = require('./dados')

const app = express()

// isso é a entrada normal

// app.get('/ufs', (req, res) => {
//     res.json(colecaoUf)
// })

//isso é a nova entrada para conseguir aparecer só o id

// app.get('/ufs/:iduf', (req, res) => {
//     const idUf = parseInt(req.params.iduf)
//     const uf = colecaoUf.colecaoUf.find(u => u.id ===idUf)
//     res.json(uf)
// })

// isso é para tratar a api falando o erro

app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf)
    let mensagemErro = ''
    let uf 

    if (!(isNaN(idUf))) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUf)
        if (!uf) {
            mensagemErro = 'Uf não encontrada'
        }
    }   else {
            mensagemErro = 'Requisição inválida'
    }
    if (uf) {
        res.json(uf)
    }else {
        res.status(404).json({"Erro:": mensagemErro})
    }
})

app.listen(8080, () =>{
    console.log('servidor iniciado na porta 8080')
})