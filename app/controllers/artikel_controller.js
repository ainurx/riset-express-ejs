const Artikel = require('../models/artikel_model')

exports.findAll = (req, res)=>{
  Artikel.findAll((err, artikel)=>{
    if(err) res.send(err)
    res.send(artikel)
  })
}

exports.findById = (req, res)=>{
  Artikel.findById(req.params.id, (err, artikel)=>{
    if(err) res.send(err)
    res.send(artikel)
  })
}

exports.create = (req, res)=>{
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'isi data'
    })
  }
  else{
    const newArtikel = new Artikel(req.body)
    Artikel.create(newArtikel, (err, artikel)=>{
      if(err){
        res.send(err)
      } 
      else{
        res.send({
          error: false,
          message: 'artikel terinput'
        })
      }
    })
  }
}

exports.update = (req, res)=>{
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'isi data'
    })
  }
  else{
    const newData = new Artikel(req.body)
    Artikel.update(req.params.id, newData, (err, artikel)=>{
      if(err){
        res.send(err)
      } 
      else{
        res.send({
          error: false,
          message: 'data terupdate'
        })
      }
    })
  }
}

exports.delete = (req, res)=>{
  Artikel.delete(req.params.id, (err, artikel)=>{
    if(err) res.send(err)
    res.send('artikel deleted')
  })
}