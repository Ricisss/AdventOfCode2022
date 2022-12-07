'use strict';
exports.__esModule = true;
var Solution_1 = require("./Solutions/7/Solution");
var fs = require('fs');
fs.readFile('Inputs\\7.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    var sol = new Solution_1.Solution(data);
    var solution = sol.GetSolution();
    console.log("----------------------");
    console.log("Solution: " + solution);
    console.log("----------------------");
});
