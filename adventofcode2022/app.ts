'use strict';

import { Solution } from "./Solutions/1/Solution"

const fs = require('fs');



console.log('Hello world');


fs.readFile('Inputs\\1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var sol = new Solution(data);
    const solution = sol.GetSolution();
    console.log("Solution: " + solution);
});


//require('readline')
//    .createInterface(process.stdin, process.stdout)
//    .question("Press [Enter] to exit...", function () {
//        process.exit();
//    });