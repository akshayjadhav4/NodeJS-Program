// npm install ejs
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/public',express.static(path.join(__dirname,'static')))
app.set('view engine','ejs')
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data:{userQuery:req.params.userQuery,
                        searchResults : ['Witcher','Lock & Key','Alterd Carbon'],
                        loggedIn: false,username:'Akshay'}})
})

app.listen(2004)