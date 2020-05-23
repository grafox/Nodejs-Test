/* const logger = require('./logger');

const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);
 */
 const os = require('os');

 const totalMemory = os.totalmem();
 const freeMemory = os.freemem();

 console.log(`Total Memory: ${totalMemory}`);
 console.log(`Free Memory: ${freeMemory}`);

 
