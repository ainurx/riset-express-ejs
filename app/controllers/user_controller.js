const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const User = require('../models/user_model')
const { use } = require('../routes/user_route')

// app.set('view engine', 'ejs')

exports.findAll = (req, res)=>{
  User.findAll((err, user)=>{
    if(err){
      res.send(err)
    }
    else{
      // res.render('pages/index', {user: user})
      res.send(user)
    }
  })
}

exports.create = (req, res)=>{
  const newUser = new User(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'Isi data'
    })
  }
  else{
    newUser.password = bcrypt.hashSync(newUser.password, salt)
    User.create(newUser, (err, user)=>{
      if(err){
        res.send(err)
      }
      else{
        res.json({
          error: false,
          message: 'new user added',
          data: user
        })
      }
    })
  }
}

exports.update = (req, res)=>{
  const newData = new User(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'isi data'
    })
  }
  else{
    User.update(req.params.id, newData, (err, user)=>{
      if(err){
        res.send(err)
      }
      else{
        res.send(user)
      }
    })
  }
}

exports.delete = (req, res)=>{
  User.delete(req.params.id, (err, user)=>{
    if(err) res.send(err)
    res.json({
      error: false,
      message: 'User terhapus'
    })
  })
}

exports.signin = (req, res)=>{
  res.render('pages/login')
}

exports.auth = (req, res)=>{

}

exports.daftar = (req, res)=>{
  res.render('pages/signup')
}