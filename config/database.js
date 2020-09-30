const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'riset-artikel'
})

conn.connect(err=>{
  if(err) throw err
  console.log("DB is good")
})

module.exports = conn