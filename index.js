const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

// to set EJS & static files
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: false}))

const Artikel = require('./app/models/artikel_model')

app.get('/', (req, res)=>{
  Artikel.findAll((err, artikel)=>{
    if(err) res.send(err)
    res.render('pages/index', {artikel: artikel})
  })
})

const userRoute = require('./app/routes/user_route')

app.use('/admin', userRoute)

app.listen(PORT, ()=>{
  console.log("the server is running")
})