const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Submit</button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> Hello from Nodejs </title></head>");
  res.write("<body><h1> This is the first page </h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
