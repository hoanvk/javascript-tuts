var fs = require('fs');
// var song1 = fs.readFileSync('./song1.txt', {encoding: 'UTF8'});
// console.log(song1);

console.log('Start read file');
function readFile(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }   
    });
  });
}
async function run(){
  var song1 = await readFile('./song1.txt');
  var song2 = await readFile('./song2.txt');
  console.log(song1, song2);
  return [song1, song2];
}

run()
.then(function(data){
  console.log(data);
});
// readFile('./song1.txt')
// .then(function(data){
//   console.log(data);
//   return readFile('./song2.txt');
// })
// .then(function(data2){
//   console.log(data2);
//   return readFile('./song4.txt');
// })
// .then(function(data3){
//   console.log(data3);
// })
// .catch(function(error){
//   console.log(error);
// })
console.log('End read file');

