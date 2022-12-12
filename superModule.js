var http = require('http');  

  
http.createServer(function (req, res) {  
    res.write('Hello World!'); 
    res.end(); 
}).listen(5000); 
  

console.log('Program Started !!!'); 
console.log('Program executed !!!'); 
console.log('Adding New Lines'); 
console.log('Program updated'); 
console.log('Program terminated !!!'); 