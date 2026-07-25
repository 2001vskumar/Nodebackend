//Streams
// 1.Writeable 2.Readable 3.Duplex 4.Transform

// const {writeFileSync}=require('fs')
// for(let i=1;i<=10000;i++)
// {
//     writeFileSync('./content/big.txt',`hello world ${i}\n`, {flag:'a'})
// }

// const http = require('http');
// const { createReadStream } = require('fs');

// http.createServer((req, res) => {

//     const stream = createReadStream('./content/big.txt', {
//         encoding: 'utf8'
//     });

//     stream.on('data', (chunk) => {
//         res.write(chunk);      // Send each chunk to the browser
//     });

//     stream.on('end', () => {
//         res.end();             // Tell the browser the response is complete
//     });

// }).listen(3000);

const http = require('http');
const { createReadStream } = require('fs');

http.createServer((req, res) => {

    const stream = createReadStream('./content/big.txt');

    stream.pipe(res);

}).listen(3000);


// Node.js provides pipe() so you don't have to write the data and end handlers yourself.
// pipe() automatically:

// Reads chunks from the file.
// Writes each chunk to the response.
// Ends the response when the file is finished.
// Handles backpressure correctly.

// Which should you learn?

// To understand streams, it's good to first learn:

// stream.on('data')
// stream.on('end')
// res.write()
// res.end()
// because pipe() is just a convenient method that does all of the above for you automatically. This is what you'll most often use in real Node.js applications.