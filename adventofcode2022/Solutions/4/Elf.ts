
export class Elf {
    public startIndex: number;
    public endIndex: number;


    constructor(range: string) {
        const split = range.split('-');
        this.startIndex = +split[0];
        this.endIndex = +split[1];
    }

    public isSubsetOf(elf: Elf): boolean {

        if (
            this.startIndex <= elf.startIndex
            &&
            this.endIndex >= elf.endIndex
            &&
            this.startIndex <= elf.endIndex
            &&
            this.endIndex >= elf.startIndex
        )
            return true;

        return false;
    }

    public toString() {
        return this.startIndex + "-" + this.endIndex;
    }


}