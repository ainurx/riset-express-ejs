const conn = require('../../config/database')

const table = 'user'

const User = function(user){
  this.nama = user.nama
  this.username = user.username
  this.password = user.password
  this.role = user.role
}

User.findAll = result =>{
  conn.query(`SELECT * FROM ${user}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.findById = (id, result)=>{
  conn.query(`SELECT * FROM ${table} WHERE ID = ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.create = (newUser, result)=>{
  conn.query(`INSERT INTO ${table} SET ${newUser}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res.insertId)
  })
}

User.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET nama=?, username=?, password=?, role=? WHERE ID = ?`, [
    newData.nama, newData.username, newData.password, newData.role, id
  ], (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.delete = (id, result)=>{
  conn.query(`DELETE FROM ${table} WHERE ID = ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}


module.exports = User