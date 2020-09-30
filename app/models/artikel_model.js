const conn = require('../../config/database')

const Artikel = function(artikel){
  this.jusul = artikel.judul
  this.isi = judul.isi
}

const table = 'artikel'

Artikel.findAll = (result)=>{
  conn.query(`SELECT * FROM ${table}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.findById = (id, result)=>{
  conn.query(`SELECT * FROM ${table} WHERE ID= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.create = (newArtikel, result)=>{
  conn.query(`INSERT INTO ${table} SET ?`, newArtikel, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET judul= ?, isi= ? WHERE id= `, 
  [newData.judul, newData.isi, id], (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.delete = (id, result)=>{
  conn.query(`DELETE FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

module.exports = Artikel