"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const CommandType_1 = require("./CommandType");
class Command {
    constructor(text) {
        this.text = text;
        const split = text.split(" ");
        const commandType = split[1];
        switch (commandType) {
            case "cd":
                this.commandType = CommandType_1.CommandType.cd;
                this.targetDir = split[2];
                break;
            case "ls":
                this.commandType = CommandType_1.CommandType.ls;
                break;
            default:
                console.log("This was not supposed to happen");
        }
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map