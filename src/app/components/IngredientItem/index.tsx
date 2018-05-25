import * as React from 'react';
import { Component, Fragment } from 'react'
import Ingredient from "app/models/Ingredient";
import {observer} from "mobx-react";

import { Slider, InputNumber, Row, Col } from 'antd';
import {action} from "mobx";
// import store from "app/stores/IngredientsStore";

export interface IngredientProps {
    ingd: Ingredient;
}

@observer
class IngredientItem extends Component<IngredientProps> {

    constructor(props) {
        super(props);
    }

    select = () => this.props.ingd.select();

    @action onChange = value => this.props.ingd.percentage = value;

    renderSlider() {
        if (this.props.ingd.selected) {
            return <Fragment>
                <Col span={4}>
                    <Slider
                        min={this.props.ingd.minimum}
                        max={this.props.ingd.maximum}
                        value={this.props.ingd.percentage}
                        step={0.01}
                        onChange={this.onChange}
                    />
                </Col>
                <Col span={2}>
                    <InputNumber
                        min={this.props.ingd.minimum}
                        max={this.props.ingd.maximum}
                        style={{ marginLeft: 16 }}
                        value={this.props.ingd.percentage}
                        step={0.01}
                        onChange={this.onChange}
                    />
                </Col>
            </Fragment>;
        }
        return;
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <div onClick={this.select}>{this.props.ingd.name}</div>
                </Col>
                { this.renderSlider() }
            </Row>
        );
    }
}

export default IngredientItem;