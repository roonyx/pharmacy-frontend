import {action} from "mobx";
import store from "app/stores/IngredientsStore";

export class Formulation {
    readonly id: number;
    readonly name: string;
    readonly formulation_ingredients: Array<object>;

    constructor(formulation) {
        this.id = formulation.id;
        this.name = formulation.name;
        this.formulation_ingredients = formulation.formulation_ingredients
    }

    @action
    select(): void {
        for (let el of this.formulation_ingredients) {
            store.find(el['ingredient_id']).select();
        }
    };

    description(): string {
        let res = '';
        for (let el of this.formulation_ingredients) {
            res += store.find(el['ingredient_id']).name;
        }
        return res;
    }
}

export default Formulation;