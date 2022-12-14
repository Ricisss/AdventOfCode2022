"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const _ = require("underscore");
const Elf_1 = require("./Elf");
class Solution {
    constructor(input) {
        this._elfs = [];
        this._parseInput(input);
    }
    GetSolution() {
        const orderedElfs = _.sortBy(this._elfs, (elf) => {
            return -elf.getTotalCalories();
        });
        const elf1 = orderedElfs[0].getTotalCalories();
        const elf2 = orderedElfs[1].getTotalCalories();
        const elf3 = orderedElfs[2].getTotalCalories();
        return elf1 + elf2 + elf3;
    }
    _parseInput(input) {
        const inventories = input.split(/\n\s*\n/);
        inventories.forEach((inventory) => {
            this._elfs.push(new Elf_1.Elf(inventory));
        });
        console.warn("Elf count: " + this._elfs.length);
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map