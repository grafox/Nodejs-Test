console.log(__filename);
console.log(__dirname);

const EventEmitter =  require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        console.log(message);

        //Raise an event
        this.emit('massagelogged',{id: 1,url:'http://'});
    }
}

module.exports = Logger;