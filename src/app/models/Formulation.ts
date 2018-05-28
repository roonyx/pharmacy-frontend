import {action} from "mobx";
import store from "app/stores/IngredientsStore";
import fstore from "app/stores/FormulationsStore";

export class Formulation {
    readonly id: number;
    readonly name: string;
    readonly ingredients = Array<object>();

    constructor(formulation) {
        this.id = formulation.id;
        this.name = formulation.name;

        for (let ingredient of formulation.formulation_ingredients) {
            this.ingredients.push({
                id: ingredient.ingredient_id,
                percentage: Number(ingredient.percentage)
            })
        }
    }

    @action
    select(): void {
        for (let el of this.ingredients) {
            store.find(el['id']).select(el['percentage']);
        }
        fstore.modal.visible = false;
    };
}

export default Formulation;