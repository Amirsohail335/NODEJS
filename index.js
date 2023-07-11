// const http = require("http");
import http from "http";
import gfName from "./feature.js";


const server = http.createServer((req , res) => {
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>");
    }

    else if(req.url === "/"){
        res.end("<h1>Home page</h1>");
    }

    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>");
    }

    else if(req.url === "/user"){
        res.end("<h1>User Page</h1>");
    }
    else{
        res.end("<h1>Page not found</h1>")
    }
   
})

server.listen(5000 ,()=> {
    console.log("Server is working")
})

