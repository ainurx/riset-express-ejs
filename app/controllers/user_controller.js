const express = require('express')
const app = express()
const User = require('../models/user_model')

// app.set('view engine', 'ejs')

exports.findAll = (req, res)=>{
  res.render('pages/index')
}

exports.create = (req, res)=>{
  res.render('pages/signup')
}

exports.signin = (req, res)=>{
  res.render()
}

exports.auth = (req, res)=>{

}