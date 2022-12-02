
import _ = require("underscore");
import { Elf } from "./Elf";


export class Solution {

    private _elfs: Elf[];


    constructor(input: string) {
        this._elfs = [];
        this._parseInput(input);
    }

    public GetSolution(): number {
        const orderedElfs = _.sortBy(this._elfs, (elf) => {
            return -elf.getTotalCalories();
        });

        return orderedElfs[0].getTotalCalories();
    }


    private _parseInput(input: string) {
        const inventories = input.split(/\n\s*\n/);

        inventories.forEach((inventory) => {
            this._elfs.push(new Elf(inventory));
        })

        console.warn("Elf count: " + this._elfs.length);
    }
}