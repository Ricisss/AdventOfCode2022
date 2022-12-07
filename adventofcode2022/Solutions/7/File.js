"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
    constructor(text) {
        const split = text.split(" ");
        this.size = +split[0];
        this.name = split[1];
    }
}
exports.File = File;
//# sourceMappingURL=File.js.map