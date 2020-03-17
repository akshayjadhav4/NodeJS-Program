const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{

    const readStream = fs.createReadStream('./static/Fortnite_home.png')
    res.writeHead(200,{'content-type':'image/png'})
    readStream.pipe(res)
}).listen(2004 )