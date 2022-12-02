"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elf = void 0;
const Supply_1 = require("./Supply");
class Elf {
    constructor(inventoryString) {
        this._inventory = [];
        this._parseInventory(inventoryString);
    }
    getTotalCalories() {
        return this._getTotalCalories();
    }
    getTotalItems() {
        return this._inventory.length;
    }
    _getTotalCalories() {
        let sum = 0;
        this._inventory.forEach((supply) => {
            sum += supply.getCaloriesValue();
        });
        return sum;
    }
    _parseInventory(inventoryString) {
        const inventoryItems = inventoryString.split(/\r?\n/);
        inventoryItems.forEach((item) => {
            if (!isNaN(+item)) {
                this._inventory.push(new Supply_1.Supply(+item));
            }
        });
    }
}
exports.Elf = Elf;
//# sourceMappingURL=Elf.js.map