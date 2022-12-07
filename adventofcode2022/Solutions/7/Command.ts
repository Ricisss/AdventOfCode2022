import {CommandType} from "./CommandType";

export class Command {
    public readonly commandType: CommandType;
    public readonly targetDir: string;
    public readonly text: string;

    constructor(text: string) {
        this.text = text;
        const split = text.split(" ");
        
        const commandType = split[1];

        switch (commandType) {
            case "cd":
                this.commandType = CommandType.cd;
                this.targetDir = split[2];
                break;

            case "ls":
                this.commandType = CommandType.ls;
                break;

            default:
                console.log("This was not supposed to happen");

        }
    }
}