const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database("./ws.db")

db.serialize(function () 
{
  // Criar a Tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT, 
      title TEXT,
      category TEXT, 
      description TEXT,
      link TEXT
    );
  `)

  // Inserir Dados

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
      "https://image.flaticon.com/icons/svg/2758/2758767.svg",
      "Cursos de Programação",
      "Estudo",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem accusamus eos dolor ipsum est, aliquam totam ea, error tempora fugit id nisi quo eligendi nesciunt quibusdam eum eius officiis!",
      "/",
    ]

  // db.run(query, values, function (err){
  //   if (err) return console.log(err)
  //   console.log(this)
  // })

  // Consultar Dados

    db.all(`SELECT * FROM ideas`, function(err, rows){
      if(err) return console.log(err)

        console.log(rows)
    })

  // Deletar Dados

    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //   if(err) return console.log(err)

    //   console.log(this)
    // })
    //db.run(`DELETE FROM ideas`)
    
})


module.exports = db