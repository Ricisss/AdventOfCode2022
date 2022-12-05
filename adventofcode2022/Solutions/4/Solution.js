"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const Elf_1 = require("./Elf");
class Solution {
    constructor(input) {
        this._parseInput(input);
    }
    GetSolution() {
        let result = 0;
        this.lines.forEach((line) => {
            const split = line.split(',');
            const elf1Range = split[0];
            const elf2Range = split[1];
            const elf1 = new Elf_1.Elf(elf1Range);
            const elf2 = new Elf_1.Elf(elf2Range);
            if (elf1.isSubsetOf(elf2) || elf2.isSubsetOf(elf1)) {
                result++;
                console.log(elf1.toString() + "," + elf2.toString());
            }
        });
        return result;
    }
    _parseInput(input) {
        this.lines = input.split("\n");
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map