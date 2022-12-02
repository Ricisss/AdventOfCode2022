'use strict';

console.log('Hello world');




require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
        process.exit();
    });