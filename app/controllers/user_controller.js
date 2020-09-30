const express = require('express')
const app = express()
const User = require('../models/user_model')

// app.set('view engine', 'ejs')

exports.findAll = (req, res)=>{
  User.findAll((err, user)=>{
    if(err){
      res.send(err)
    }
    else{
      res.render('pages/index', {user: user})
    }
  })
}

exports.create = (req, res)=>{
  res.render('pages/signup')
}

exports.signin = (req, res)=>{
  res.render()
}

exports.auth = (req, res)=>{

}