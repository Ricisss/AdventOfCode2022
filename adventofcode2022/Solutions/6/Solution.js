"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const _ = require("underscore");
class Solution {
    constructor(input) {
        this._parseInput(input);
    }
    GetSolution() {
        const distinctCharacters = 14;
        for (var i = distinctCharacters; i <= this.input.length; i++) {
            const chars = this.input.substring(i - distinctCharacters, i);
            const uniq = _.uniq(chars);
            if (uniq.length === distinctCharacters)
                return i;
        }
    }
    _parseInput(input) {
        this.input = input;
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map