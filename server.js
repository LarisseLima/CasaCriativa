// Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

// Configurar arquivos estáticos ( css, scripts , imagens)
server.use(express.static("public"))

// Criei uma rota /
// E capturo o pedido do cliente para responder
server.get('/', function (req, res) {
    return res.sendFile(__dirname + "/index.html")

})

// ligar o servidor na porta 3000
server.listen(3000)