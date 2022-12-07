import {Folder} from "./Folder";

export class File {
    public readonly size: number;
    public readonly name: string;

    constructor(text: string) {
        const split = text.split(" ");
        this.size = +split[0];
        this.name = split[1];
    }
}