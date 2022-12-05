"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elf = void 0;
class Elf {
    constructor(range) {
        const split = range.split('-');
        this.startIndex = +split[0];
        this.endIndex = +split[1];
    }
    isSubsetOf(elf) {
        if (this.startIndex <= elf.startIndex
            &&
                this.endIndex >= elf.endIndex
            ||
                this.startIndex <= elf.endIndex
                    &&
                        this.endIndex >= elf.startIndex)
            return true;
        return false;
    }
    toString() {
        return this.startIndex + "-" + this.endIndex;
    }
}
exports.Elf = Elf;
//# sourceMappingURL=Elf.js.map