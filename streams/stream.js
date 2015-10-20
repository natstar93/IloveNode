var fs = require('fs');

var readStream = fs.createReadStream('lorem.txt');

readStream.setEncoding('utf8');

var counter = 0;
readStream.once('data', function(datacoming) {
  counter = counter + 1;
  if (counter === 1) {
    readStream.pause();
    console.log('paused at ' + counter);
  }
//  console.log(datacoming);
});

readStream.on('end', function() {
  console.log(counter);
})

//var writeStream = fs.createWriteStream('copylorem.txt');

//writeStream.write(new Buffer([10, 20, 30, 40, 50]));
//readStream.pipe(writeStream);
