'use strict';



import { Solution } from "./Solutions/4/Solution"

const fs = require('fs');




fs.readFile('Inputs\\4.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var sol = new Solution(data);
    const solution = sol.GetSolution();
    console.log("----------------------");
    console.log("Solution: " + solution);
    console.log("----------------------");
});