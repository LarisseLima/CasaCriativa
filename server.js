// Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

// Configurar arquivos estáticos ( css, scripts , imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})


// Criei uma rota /
// E capturo o pedido do cliente para responder
server.get('/', function (req, res) {
    const reversedIdeas = [...rows].reverse();
    let lastIdeas = [];
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render('index.html', { ideas: lastIdeas });
})
server.get('/', function (req, res) {
    return res.render("ideias.html")
})

// ligar o servidor na porta 3000
server.listen(3000)