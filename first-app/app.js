/////////////
const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);

////////////////
 const os = require('os');

 const totalMemory = os.totalmem();
 const freeMemory = os.freemem();

 console.log(`Total Memory: ${totalMemory}`);
 console.log(`Free Memory: ${freeMemory}`);
 
/////////////
 const fs = require('fs');

 files = fs.readdirSync('./', (err,files)=>{
     if (err) console.log('Eror',err);
     else console.log('resulat',files) 
 });
 console.log(files);

 /////////////
 const Logger = require('./logger');
 const logger = new Logger();
//Register 
logger.on('messageLogged',(arg)=>{
    console.log('Listner called',arg);
})

logger.log('message');
 
///////HTTP
const http = require('http');

/*const server = http.createServer();

 server.on('connection',(socket) => {
    console.log('New Connections...');
}); */

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

