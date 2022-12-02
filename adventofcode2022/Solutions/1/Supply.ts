export class Supply {

    private _calories: number;

    constructor(calories: number) {
        this._calories = calories;
    }

    public getCaloriesValue() {
        return this._calories;
    }
}