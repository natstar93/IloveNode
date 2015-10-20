var fs = require('fs');

var readStream = fs.createReadStream('lorem.txt');

readStream.setEncoding('utf8');

var counter = 0;
readStream.addListener('data', dataCounter);
readStream.addListener('data', dataPrinter);

readStream.addListener('end', outputCounter)

function dataCounter(datacoming) {
  counter = counter + 1;
  if(counter === 1) {
    readStream.removeAllListeners('data');
  }
}

function dataPrinter(data) {
  console.log('data chunk length: ' + data.length);
}

function outputCounter() {
  console.log(counter);
}

//var writeStream = fs.createWriteStream('copylorem.txt');

//writeStream.write(new Buffer([10, 20, 30, 40, 50]));
//readStream.pipe(writeStream);
