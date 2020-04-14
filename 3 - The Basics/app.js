const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);
server.listen(3000);
if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Submit</button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (err) => {
        // Only set the response if we're done working on the file
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> Hello from Nodejs </title></head>");
  res.write("<body><h1> This is the first page </h1> </body>");
  res.write("</html>");
  res.end();