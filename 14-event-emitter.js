const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// this one listens for the data and then receives it
customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id : ${id}`);
});

customEmitter.emit('response', 'john', 34)

// this one listens for the data after it's emission so misses it
customEmitter.on('response', () => {
    console.log(`data received`);
});