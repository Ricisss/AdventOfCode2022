'use strict';



import { Solution } from "./Solutions/7/Solution"

const fs = require('fs');



fs.readFile('Inputs\\7.txt', 'utf8', (err, data) => {
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