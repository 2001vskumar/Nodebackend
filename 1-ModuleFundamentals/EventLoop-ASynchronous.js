// Event Loop
// JavaScript runs on a single thread.
// When an asynchronous operation like readFile() takes time,
// Node.js offloads the file reading operation instead of waiting for it.
// Meanwhile, JavaScript continues executing the remaining code.

const { readFile, writeFile } = require('fs');

console.log("started task");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    console.log(result);
    console.log("completed the task");
});

console.log("starting next task");

// Output:
// started task
// starting next task
// this is from first txt file
// completed the task

// readFile() is asynchronous (non-blocking I/O).
// The file reading work is offloaded, so JavaScript doesn't wait.
// It executes "starting next task" immediately.
// Once the file is completely read, the Event Loop invokes the callback function.