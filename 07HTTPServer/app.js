const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello from nodeJS");
    res.end();
  }else{
    res.write('404')
    res.end()
  }
});

server.listen("2004");
