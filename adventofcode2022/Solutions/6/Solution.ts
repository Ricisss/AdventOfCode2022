
import _ = require("underscore");



export class Solution {

    private input: string;


    constructor(input: string) {
        this._parseInput(input);
    }

    public GetSolution(): any {

        const distinctCharacters = 14;

        for (var i = distinctCharacters; i <= this.input.length; i++) {
            const chars = this.input.substring(i - distinctCharacters, i);
            const uniq = _.uniq(chars);

            if (uniq.length === distinctCharacters)
                return i;
        }

    }


    private _parseInput(input: string) {
        this.input = input;
    }
}