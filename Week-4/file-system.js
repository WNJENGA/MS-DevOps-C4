// Import
var fs = require('fs');

// Synchronous vs Asynchronous jobs
// Synchronous === Blocking
// const fileData = fs.readFileSync('public/index.html');
// console.log(fileData.toString());

// Asynchronous === Non-Blocking
fs.readFile('public/index.html', function (error, fileData) {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('File', fileData.toString());
    }
});

console.log('The demo has ended');