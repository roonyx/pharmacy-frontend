import * as React from 'react';
import { Component, Fragment } from 'react'
import {observer} from "mobx-react";
import Formulation from 'app/models/Formulation';
import store from "app/stores/IngredientsStore";

export interface FormulationProps {
    formulation: Formulation;
}

@observer
class FormulationItem extends Component<FormulationProps> {

    constructor(props) {
        super(props);
    }

    select = () => {
        this.props.formulation.select()
    };

    render() {
        return (
            <Fragment>
                <a onClick={this.select}>
                    <p>{this.props.formulation.name}</p>
                </a>
                { this.props.formulation.ingredients.map(
                    ingredient => <p key={ingredient['id']}>{ store.find(ingredient['id']).name }</p>
                ) }
            </Fragment>
        );
    }
}

export default FormulationItem;