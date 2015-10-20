

//Async
var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {
  if(err) {
    console.log(err.code);
  }
  console.log(data);
});

fs.writeFile('text2.txt', 'some text', 'utf8', function(err, data) {
  if(err) {console.log(err)}
  console.log(data);
  return console.log('done');
})

//Sync
var fs = require('fs');

var myRead = fs.readFileSync('text.txt', 'utf8');
console.log(myRead);

var myWrite = fs.writeFileSync('text2.txt', 'text here', 'utf8');
console.log(myWrite);
