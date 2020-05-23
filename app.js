 const logger = require('./logger');
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

 files = fs.readdirSync('./', function(err,files){
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


