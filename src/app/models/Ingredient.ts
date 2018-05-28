import {action, observable} from "mobx";

export class Ingredient {
    readonly id: number;
    readonly key: string;
    readonly name: string;
    readonly minimum: number;
    readonly maximum: number;
    readonly description: string;
    readonly classes: string;
    @observable selected: boolean = false;
    @observable percentage: number = 0;

    constructor(ingredient) {
        this.id = ingredient.id;
        this.key = ingredient.id.toString();
        this.name = ingredient.name;
        this.minimum = Number(ingredient.minimum_percentage);
        this.maximum = Number(ingredient.maximum_percentage);
        this.description = ingredient.description;
        this.classes = ingredient.classes;
    }

    @action
    select(percentage = (this.minimum + this.maximum) / 2): void {
        this.selected = true;
        this.percentage = percentage;
    };

    @action
    unselect(): void {
        this.selected = false;
        this.percentage = 0;
    };
}

export default Ingredient;