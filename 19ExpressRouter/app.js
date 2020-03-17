// npm install ejs
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine','ejs')
const people = require('./routes/people')

app.use('/people',people)

app.use('/animal',(req,res)=>{
    res.send('/Animal')
})

app.listen(2004)