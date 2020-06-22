const express = require('express')
const server = express()
const db = require("./db")

// configurar arquivos estáticos
server.use(express.static("public"))

// habilitar uso do req.body
server.use(express.urlencoded({extended: true}))

// nunjucks para usarmos variáveis no html
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})

// rotas
server.get("/", function(req, res){

  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if(err) return console.log(err)

    let lastIdeias = []
    const reversedIdeias = [...rows].reverse()

    for (ideia of reversedIdeias){
      if (lastIdeias.length < 2){
        lastIdeias.push(ideia)
      }

    }
    return res.render("index.html", {ideias: lastIdeias}) 
  })

})

server.get("/ideias", function(req, res) {

  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if(err) return console.log(err)

    const reversedIdeias = [...rows].reverse()

    return res.render("ideias.html", {ideias: reversedIdeias})
  })
})

server.post("/", function(req, res){

  const query = (`
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) values (?,?,?,?,?);
`)

  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
  ]

  db.run(query, values, function (err){
    if (err) {
      console.log(err)
      return res.send("ERRO: Banco de Dado inoperante.")
    }
    return res.redirect("/ideias")
  })
})


server.listen(3000)
