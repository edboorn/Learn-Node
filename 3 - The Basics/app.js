const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type' , 'text/html')
    res.write('<html>');
    res.write('<h1>Hello from the other side</h1>')
    res.write('</html>');
});

server.listen(3000);
