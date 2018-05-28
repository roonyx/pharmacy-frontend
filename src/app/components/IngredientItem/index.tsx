import * as React from 'react';
import { Component, Fragment } from 'react'
import Ingredient from "app/models/Ingredient";
import { observer } from "mobx-react";

import { Slider, InputNumber, Row, Col } from 'antd';
import { action } from "mobx";

export interface IngredientProps {
    ingredient: Ingredient;
}

@observer
class IngredientItem extends Component<IngredientProps> {

    constructor(props) {
        super(props);
    }

    select = () => {
        const selected = this.props.ingredient.selected;
        selected ? this.props.ingredient.unselect(): this.props.ingredient.select();
    };

    @action onChange = value => this.props.ingredient.percentage = value;

    renderSlider() {
        if (this.props.ingredient.selected) {
            return <Fragment>
                <Col span={4}>
                    <Slider
                        min={this.props.ingredient.minimum}
                        max={this.props.ingredient.maximum}
                        value={this.props.ingredient.percentage}
                        step={0.01}
                        onChange={this.onChange}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={this.props.ingredient.minimum}
                        max={this.props.ingredient.maximum}
                        style={{ marginLeft: 8 }}
                        value={this.props.ingredient.percentage}
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
                <Col span={16}>
                    <a><div onClick={this.select}>{this.props.ingredient.name}</div></a>
                    <div>{this.props.ingredient.description}</div>
                </Col>
                { this.renderSlider() }
            </Row>
        );
    }
}

export default IngredientItem;