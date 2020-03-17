const express = require('express')
const route = express.Router()


route.use((req,res,next)=>{
    console.log('Middleware being used')
    next()
})

route.get('/',(req,res)=>{
    res.send('/being Hit')
})


route.get('/example',(req,res)=>{
    res.send('/example being Hit')
})

module.exports = route