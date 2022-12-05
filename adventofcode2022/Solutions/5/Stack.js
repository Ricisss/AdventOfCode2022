"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.crates = [];
    }
    push(crates) {
        crates.forEach((crate) => {
            if (crate.replace(/\s/g, "") === "" || !isNaN(+crate)) {
            }
            else {
                this.crates.push(crate);
            }
        });
    }
    pop(amount) {
        const result = this.crates.splice(this.crates.length - amount, amount);
        return result;
    }
    getTopCrate() {
        return this.crates[this.crates.length - 1];
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map