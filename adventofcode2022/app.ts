'use strict';



import { Solution } from "./Solutions/2/Solution"

const fs = require('fs');




fs.readFile('Inputs\\2.txt', 'utf8', (err, data) => {
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