
import _ = require("underscore");



export class Solution {

    private input: string;


    constructor(input: string) {
        this._parseInput(input);
    }

    public GetSolution(): any {

        for (var i = 4; i <= this.input.length; i++) {
            const chars = this.input.substring(i - 4, i);
            const uniq = _.uniq(chars);

            if (uniq.length === 4)
                return i;
        }

    }


    private _parseInput(input: string) {
        this.input = input;
    }
}