
import _ = require("underscore");
import { Elf } from "./Elf";



export class Solution {

    private lines: string[];


    constructor(input: string) {
        this._parseInput(input);
    }

    public GetSolution(): any {
        let result = 0;

        this.lines.forEach((line) => {
            const split = line.split(',');

            const elf1Range = split[0];
            const elf2Range = split[1];

            const elf1 = new Elf(elf1Range);
            const elf2 = new Elf(elf2Range);

            if (elf1.isSubsetOf(elf2) || elf2.isSubsetOf(elf1)) {
                result++;
                console.log(elf1.toString() + "," + elf2.toString());
            }

        })

        return result;
    }


    private _parseInput(input: string) {
        this.lines = input.split("\n");
    }
}