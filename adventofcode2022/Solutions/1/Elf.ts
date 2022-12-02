import { Supply } from "./Supply";

export class Elf {

    private _inventory: Supply[];

    constructor(inventoryString: string) {
        this._inventory = [];
        this._parseInventory(inventoryString);
    }

    public getTotalCalories() {
        return this._getTotalCalories();
    }

    public getTotalItems(): number {
        return this._inventory.length;
    }

    private _getTotalCalories(): number {
        let sum = 0;

        this._inventory.forEach((supply) => {
            sum += supply.getCaloriesValue();
        })

        return sum;
    }

    private _parseInventory(inventoryString: string) {
        const inventoryItems = inventoryString.split(/\r?\n/);

        inventoryItems.forEach((item) => {
            if (!isNaN(+item)) {
                this._inventory.push(new Supply(+item));
            }
        })
    }
}