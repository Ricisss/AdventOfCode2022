"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const _ = require("underscore");
class Solution {
    constructor(input) {
        this._parseInput(input);
    }
    GetSolution() {
        let total = 0;
        this.rucksacks.forEach((rucksack) => {
            const size = rucksack.length;
            const comparmentA = rucksack.substring(0, (size / 2));
            const comparmentB = rucksack.substring(size / 2, size);
            const intersection = _.intersection(comparmentA, comparmentB);
            const pointValue = this.getPointValue(intersection[0]);
            total += pointValue;
        });
        return total;
    }
    getPointValue(letter) {
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
        this.rucksacks = lines;
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map