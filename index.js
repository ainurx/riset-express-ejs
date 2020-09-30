const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

// to set EJS & static files
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=>{
  res.send('Hello.. this is for riset EJS')
})

const userRoute = require('./app/routes/user_route')

app.use('/admin', userRoute)

app.listen(PORT, ()=>{
  console.log("the server is running")
})