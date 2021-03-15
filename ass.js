const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
  const pathName = req.url;
    if(pathName === "/venkat"){
        res.end("I'm Venkat and the owner of the server");
    }else if (pathName === "/home") {
      fs.readFile("home.html","utf-8",(err, data)=>{
          res.end(data);
      });
   } else if (pathName === "/movie"){
       fs.readFile("movie.html", "utf-8",(err, data) => {
           res.end(data);
       });
   }  else if (pathName === "/cricket"){
        fs.readFile("cricket.html", "utf-8",(err, data) => {
            res.end(data);
        });
   }  else if (pathName === "/update"){
            fs.readFile("userPg.html", "utf-8",(err, data) => {
                res.end(data);
        });
   } else {
       res.writeHead(400, {"content-type": "text/html"});
       res.end("<h1>Page Not Found<h1>");
   }
});

server.listen(3000, "127.0.0.1", () =>{
    console.log("server is listening to port 3000");
});
