"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
class Solution {
    constructor(input) {
        this._parseInput(input);
    }
    GetSolution() {
        let totalPoints = 0;
        this.rounds.forEach((round) => {
            const playerA = round[0];
            const endCondition = round[2];
            let playerB = "";
            switch (endCondition) {
                case "X": //Loose
                    if (playerA === "A")
                        playerB = "Z";
                    if (playerA === "B")
                        playerB = "X";
                    if (playerA === "C")
                        playerB = "Y";
                    break;
                case "Y": //Draw
                    if (playerA === "A")
                        playerB = "X";
                    if (playerA === "B")
                        playerB = "Y";
                    if (playerA === "C")
                        playerB = "Z";
                    break;
                case "Z": //Win
                    if (playerA === "A")
                        playerB = "Y";
                    if (playerA === "B")
                        playerB = "Z";
                    if (playerA === "C")
                        playerB = "X";
                    break;
                default:
            }
            const roundPoints = this.getRoundPoints(playerA, playerB);
            totalPoints += roundPoints;
            //console.log(roundPoints);
        });
        return totalPoints;
    }
    getRoundPoints(playerA, playerB) {
        let points = 0;
        switch (playerB) {
            case "X":
                points += 1;
                break;
            case "Y":
                points += 2;
                break;
            case "Z":
                points += 3;
                break;
            default:
        }
        //PlayerB wins
        if (playerA === "A" && playerB === "Y")
            return points + 6;
        if (playerA === "B" && playerB === "Z")
            return points + 6;
        if (playerA === "C" && playerB === "X")
            return points + 6;
        //Draw 
        if (playerA === "A" && playerB === "X")
            return points + 3;
        if (playerA === "B" && playerB === "Y")
            return points + 3;
        if (playerA === "C" && playerB === "Z")
            return points + 3;
        //Loss
        return points;
    }
    _parseInput(input) {
        this.rounds = input.split("\n");
    }
}
exports.Solution = Solution;
//# sourceMappingURL=Solution.js.map