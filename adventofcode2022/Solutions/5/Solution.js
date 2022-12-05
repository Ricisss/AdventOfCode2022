"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const Stack_1 = require("./Stack");
class Solution {
    constructor(input) {
        this.stacks = [];
        this.instructions = [];
        this._parseInput(input);
    }
    GetSolution() {
        this.instructions.forEach((instruction) => {
            const box = this.stacks[instruction.from].pop(instruction.amount);
            this.stacks[instruction.to].push(box);
        });
        let result = "";
        this.stacks.forEach((stack) => {
            result += stack.getTopCrate();
        });
        return result;
    }
    _parseInput(input) {
        const split = input.split(/\n\s*\n/);
        const stacks = split[0];
        const instructions = split[1];
        const stacksSplit = stacks.split("\n");
        // Parse stacks
        const amountOfStacks = stacksSplit[stacksSplit.length - 1].replace(/\s/g, "").length;
        for (let i = 0; i < amountOfStacks; i++) {
            this.stacks.push(new Stack_1.Stack());
        }
        for (var stackI = 0; stackI < stacksSplit.length; stackI++) {
            const row = stacksSplit[stacksSplit.length - 1 - stackI];
            for (let i = 0; i < amountOfStacks; i++) {
                this.stacks[i].push([row[1 + 4 * i]]);
            }
        }
        //Parse instrcutions
        const instructionsSplit = instructions.split("\n");
        instructionsSplit.forEach((line) => {
            const matches = line.match(/\d+/g);
            this.instructions.push({
                amount: +matches[0],
                from: +matches[1] - 1,
                to: +matches[2] - 1,
            });
        });
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map