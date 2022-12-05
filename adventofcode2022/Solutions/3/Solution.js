"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const _ = require("underscore");
class Solution {
    constructor(input) {
        this._parseInput(input);
        console.log(this.groups);
    }
    GetSolution() {
        let total = 0;
        this.groups.forEach((group) => {
            const intersection = _.intersection(group[0], group[1], group[2]);
            const pointValue = this.getItemPointValue(intersection[0]);
            total += pointValue;
        });
        return total;
    }
    getItemPointValue(letter) {
        let result = letter.charCodeAt(0);
        if (result < 97) {
            result += -65 + 27;
            return result;
        }
        if (result >= 97) {
            result += -97 + 1;
            return result;
        }
        console.error('err');
        return 0;
    }
    _parseInput(input) {
        const lines = input.split("\n");
        const parsedLines = [];
        this.groups = [];
        lines.forEach((line) => {
            parsedLines.push(line.replace("\r", ""));
        });
        let i = 0;
        while (i < parsedLines.length) {
            this.groups.push([parsedLines[i], parsedLines[i + 1], parsedLines[i + 2]]);
            i += 3;
        }
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map