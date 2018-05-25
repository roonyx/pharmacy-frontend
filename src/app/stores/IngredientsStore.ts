import { observable, action, computed } from 'mobx';
import Ingredient from "app/models/Ingredient";
import axios from "axios";

export class IngredientsStore {
    constructor() {
        this.ingredients = [];
        this.fetch();
    }

    @observable ingredients: Array<Ingredient>;

    fetch() {
        axios.get('api/ingredients')
             .then(resp => this.save(resp.data));
    }

    @action
    save(items) {
        for (let item of items)
            this.ingredients.push(new Ingredient(item))
    }

    find(id: number) {
        return this.ingredients.find((ngrd) => ngrd.id === id);
    }

    @computed
    get selected(): Array<Ingredient> {
        return this.ingredients.filter((ngrd) => ngrd.selected);
    }

    @computed
    get unselected(): Array<Ingredient> {
        return this.ingredients.filter((ngrd) => !ngrd.selected);
    }

    @computed
    get totalPercentage(): number {
        return this.selected.reduce((acc, ngrd) => acc + ngrd.percentage, 0)
    }
}

export default new IngredientsStore();