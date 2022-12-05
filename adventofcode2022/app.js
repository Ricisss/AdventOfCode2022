'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Solution_1 = require("./Solutions/2/Solution");
const fs = require('fs');
fs.readFile('Inputs\\2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var sol = new Solution_1.Solution(data);
    const solution = sol.GetSolution();
    console.log("Solution: " + solution);
});
//# sourceMappingURL=app.js.map