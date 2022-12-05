
export class Stack {

    private crates: string[] = [];

    constructor() {
    }

    public push(crates: string[]) {
        crates.forEach((crate) => {
            if (crate.replace(/\s/g, "") === "" || !isNaN(+crate)) {
            } else {
                this.crates.push(crate);
            }
        })

    }

    public pop(amount: number): string[] {
        const result = this.crates.splice(this.crates.length - amount, amount);
        return result;
    }

    public getTopCrate(): string {
        return this.crates[this.crates.length - 1];
    }

}
