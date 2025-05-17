var my=require("http")
my.createServer(function(req,vicky){
vicky.end("<h1>Node trail</h1>")
}).listen(90)
console.log("port listening at .........9090")