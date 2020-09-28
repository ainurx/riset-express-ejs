const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
  res.send('Hello.. this is for riset EJS')
})

app.listen(PORT, ()=>{
  console.log("the server is running")
})