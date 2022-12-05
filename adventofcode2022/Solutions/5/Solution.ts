
import { match } from "assert";
import { forEach } from "underscore";
import _ = require("underscore");
import { Instruction } from "./Instruction";
import { Stack } from "./Stack";



export class Solution {

    private stacks: Stack[] = [];
    private instructions: Instruction[] = [];


    constructor(input: string) {
        this._parseInput(input);
    }

    public GetSolution(): any {
        this.instructions.forEach((instruction) => {

            for (var i = 0; i < instruction.amount; i++) {
                const box = this.stacks[instruction.from].pop();
                this.stacks[instruction.to].push(box);
            }

        })
        console.log(this.stacks);

        let result = "";

        this.stacks.forEach((stack) => {
            result += stack.getTopCrate();
        })
        return result;
    }


    private _parseInput(input: string) {
        const split = input.split(/\n\s*\n/);

        const stacks = split[0];
        const instructions = split[1];

        const stacksSplit = stacks.split("\n");
        console.log(stacksSplit);

        // Parse stacks
        const amountOfStacks = stacksSplit[stacksSplit.length - 1].replace(/\s/g, "").length;
        console.log("amountOfStacks: " + amountOfStacks);

        for (let i = 0; i < amountOfStacks; i++) {
            this.stacks.push(new Stack());
        }

        //stacksSplit.forEach((row) => {
        //    for (var i = 0; i < amountOfStacks; i++) {
        //        this.stacks[i].push(row[1 + 4 * i]);
        //    }
        //})
        for (var stackI = 0; stackI < stacksSplit.length; stackI++) {
            const row = stacksSplit[stacksSplit.length - 1 - stackI];
            for (let i = 0; i < amountOfStacks; i++) {
                this.stacks[i].push(row[1 + 4 * i]);
            }
        }



        //Parse instrcutions
        const instructionsSplit = instructions.split("\n");
        console.log(instructionsSplit);

        instructionsSplit.forEach((line) => {
            const matches = line.match(/\d+/g);
            this.instructions.push({
                amount: +matches[0],
                from: +matches[1] - 1,
                to: +matches[2] - 1,
            })
        })

        console.log(this.stacks);
        console.log(this.instructions);
    }
}

