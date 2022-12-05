
export class Stack {

    private crates: string[] = [];

    constructor() {
    }

    public push(crate: string) {
        if (crate.replace(/\s/g, "") === "" || !isNaN(+crate)) {
            console.log("empty");
            return
        }

        this.crates.push(crate);
    }

    public pop(): string {
        return this.crates.pop();
    }

    public getTopCrate(): string {
        return this.crates[this.crates.length - 1];
    }

}
