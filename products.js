const fs = require('fs')
const data = require('./data.json')

// Cadastro de Produtos

exports.post  = function(req, res){

    const keys = Object.keys(req.body)

    /* Validar se todos os campos estão preenchidos */
    for (key of keys){
        if (req.body[key] == "")
            return res.send("Por favor, preencha todos os campos!")
    }

    let { name } = req.body

    const id = Number(data.products.length + 1)

    //Adicionando dados no arquivo data.json
    data.products.push({
        id,
        name,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("ATENÇÃO!! Não foi possível salvar o arquivo!")

        return res.redirect("/cadastro")
    })
}
