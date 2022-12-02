'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Solution_1 = require("./Solutions/1/Solution");
const fs = require('fs');
console.log('Hello world');
fs.readFile('Inputs\\1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var sol = new Solution_1.Solution(data);
    const solution = sol.GetSolution();
    console.log("Solution: " + solution);
});
//# sourceMappingURL=app.js.map