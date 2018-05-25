import * as React from 'react';
import { Component } from 'react'
import {observer} from "mobx-react";
import Formulation from 'app/models/Formulation';

export interface FormulationProps {
    frml: Formulation;
}

@observer
class FormulationItem extends Component<FormulationProps> {

    constructor(props) {
        super(props);
    }

    select = () => {
        this.props.frml.select()
    };

    render() {
        return (
            <div onClick={this.select}>{this.props.frml.name}</div>
        );
    }
}

export default FormulationItem;