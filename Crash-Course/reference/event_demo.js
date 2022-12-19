const EventEmitter = require('events');

//create class

class MyEmitter extends EventEmitter {};

//init object 

const myEmitter = new MyEmitter();

//event listener first is event name second is callback function to perform action 
myEmitter.on("event" , ()=> console.log("Event Fired") );

//init event
myEmitter.emit("event");