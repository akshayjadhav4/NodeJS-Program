const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use((req,res,next)=>{
    // console.log(req.url,req.method);
    req.apple = 'Apple'
    next()
    
})
app.use('/public',express.static(path.join(__dirname,'static')))
app.get('/',(req,res)=>{
    console.log(req.apple);
    
    res.sendFile(path.join(__dirname, "static", "index.html"));
})


app.listen(2004)