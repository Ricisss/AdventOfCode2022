
import _ = require("underscore");



export class Solution {

    private rucksacks: string[];


    constructor(input: string) {
        this._parseInput(input);
    }


    public GetSolution(): any {
        let total = 0;

        this.rucksacks.forEach((rucksack) => {
            const size = rucksack.length;
            const comparmentA = rucksack.substring(0, (size / 2));
            const comparmentB = rucksack.substring(size / 2, size);

            const intersection = _.intersection(comparmentA, comparmentB);
            const pointValue = this.getPointValue(intersection[0]);
            total += pointValue;

        })

        return total;
    }

    private getPointValue(letter: string): number {
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


    private _parseInput(input: string) {
        const lines = input.split("\n");
        this.rucksacks = lines;
    }
}