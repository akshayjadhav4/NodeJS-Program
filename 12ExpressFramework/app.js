// http://localhost:2004/example/akshay/21?tutorial=params&sort=byage

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!!!')
})

app.get('/example',(req,res)=>{
    res.send('Hitting Example Route')
})

app.get('/example/:name/:age',(req,res)=>{

    console.log(req.params);
    console.log(req.query);
    res.send('Hitting Example Route With Params ' + req.params.name + '=>' + req.params.age)
})


app.listen(2004)