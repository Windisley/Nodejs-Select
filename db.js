const mysql = require("mysql2/promise")

const db = async ()=>{
    if(global.conexao && global.conexao.state !== "disconnected"){
        return global.conexao
    }
  
    const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mybanc"
  })

  global.conexao = connection

  return connection
}

const read = async ()=>{
    const sql = await db()
    const [query] = await sql.query("SELECT * FROM pessoas;")

  return query
}

module.exports = {read}