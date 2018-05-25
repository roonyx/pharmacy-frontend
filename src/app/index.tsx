import * as React from 'react';
import { Component } from 'react'
import { observer } from "mobx-react";
import { FormulationItem, IngredientItem } from "app/components";
import store from "app/stores/IngredientsStore";
import fstore from "app/stores/FormulationsStore";
import * as mobx from 'mobx'

import 'antd/dist/antd.css';
import {Col, List, Row, Button} from "antd";
import axios from "axios";

import f from 'file-saver';

@observer
export class App extends Component {

    constructor(props) {
        super(props);
    }

    sendData() {
        axios.post('api/order', { order: store.selected }).then(
            resp => {
                console.log(resp);
                let blob = new Blob([resp.data], {type: "application/pdf;charset=utf-8"});
                f.saveAs(blob, "hello world.pdf");
            }
        )
    }

    render(){
        return (
            <div>
                <Row gutter={48}>
                    <Col span={8}>
                        <List
                            itemLayout="vertical"
                            dataSource={mobx.toJS(fstore.formulations)}
                            renderItem={item => (
                                <List.Item>
                                    <FormulationItem key={item.id} frml={item}/>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={8}>
                        <List
                            itemLayout="vertical"
                            dataSource={mobx.toJS(store.unselected)}
                            renderItem={item => (
                                <List.Item>
                                    <IngredientItem key={item.id} ingd={item}/>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={8}>
                        <List
                            itemLayout="vertical"
                            dataSource={mobx.toJS(store.selected)}
                            renderItem={item => (
                                <List.Item>
                                    <IngredientItem key={item.id} ingd={item}/>
                                </List.Item>
                            )}
                        />
                        <Button onClick={this.sendData}>Default</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
