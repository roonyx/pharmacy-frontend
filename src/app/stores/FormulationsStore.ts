import { observable, action } from 'mobx';
import axios from "axios";
import Formulation from "app/models/Formulation";

export class FormulationsStore {
    constructor() {
        this.formulations = [];
        this.fetch();
    }

    @observable formulations: Array<Formulation>;

    fetch() {
        axios.get('api/formulations')
             .then(resp => this.save(resp.data));
    }

    @action
    save(items) {
        for (let item of items)
            this.formulations.push(new Formulation(item))
    }
}

export default new FormulationsStore();