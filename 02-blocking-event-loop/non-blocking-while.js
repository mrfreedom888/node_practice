const { rejects } = require('assert');
const { resolve } = require('dns');
const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('next tick'));

function setImmediatePromise() {
  return new Promise((resolve, rejects) => {
    setImmediate(() => resolve());
  });
}
async function whileLoop() {
  while (isRunning) {
    console.log('while loop is running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('while loop enden'));

console.log(arguments.callee.toSting());
