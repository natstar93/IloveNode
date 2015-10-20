// var events = require('events');
//
// var eventEmitter = new events.EventEmitter();
//
// var connectHandler = function connected() {
//   console.log('connection successful');
//
//   eventEmitter.emit('data_received');
// }
//
// eventEmitter.on('data_received', function() {
//   console.log('data received successfully');
// })
//
// eventEmitter.on('connection', connectHandler);
//
// eventEmitter.emit('connection');
//
// console.log('Program ended');


//


var events = require('events');
var eventEmitter = new events.EventEmitter();

var myFirstEventHandler = function first() {
  console.log('First event handler fired');
}

eventEmitter.on('firstEvent', myFirstEventHandler);

eventEmitter.emit('firstEvent');
