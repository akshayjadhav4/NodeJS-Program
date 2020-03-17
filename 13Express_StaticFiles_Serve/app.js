// http://localhost:2004/example/akshay/21?tutorial=params&sort=byage

const express = require('express')
const path = require('path')
const app = express()

app.use('/public',express.static(path.join(__dirname,'static')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','Fortnite_Home.png'))
})

app.listen(2004)