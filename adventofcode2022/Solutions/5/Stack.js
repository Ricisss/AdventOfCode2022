"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.crates = [];
    }
    push(crate) {
        if (crate.replace(/\s/g, "") === "" || !isNaN(+crate)) {
            console.log("empty");
            return;
        }
        this.crates.push(crate);
    }
    pop() {
        return this.crates.pop();
    }
    getTopCrate() {
        return this.crates[this.crates.length - 1];
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map