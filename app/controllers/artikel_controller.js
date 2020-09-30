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