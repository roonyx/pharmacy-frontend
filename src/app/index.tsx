import * as React from 'react';
import { Component } from 'react'

import { IngredientItem } from "app/components"
import BaseModal from "app/components/BaseModal";
import store from "app/stores/IngredientsStore";

import { observer } from "mobx-react";
import * as mobx from 'mobx'
import axios from "axios";
import fileSaver from 'file-saver';

import 'antd/dist/antd.css';
import {Col, List, Row, Button} from "antd";

@observer
export class App extends Component {

    constructor(props) {
        super(props);
    }

    sendData() {
        axios.post('api/order', { order: store.selected }).then(
            resp => {
                let blob = new Blob([resp.data], {type: "application/pdf;charset=utf-8"});
                fileSaver.saveAs(blob, "Order.pdf");
            }
        )
    }

    render(){
        return (
            <div>
                <Row gutter={48} type="flex" justify="center">
                    <Col span={8}>
                        <List
                            itemLayout="vertical"
                            dataSource={mobx.toJS(store.unselected)}
                            renderItem={item => (
                                <List.Item>
                                    <IngredientItem ingredient={item}/>
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
                                    <IngredientItem ingredient={item}/>
                                </List.Item>
                            )}
                        />
                    </Col>

                    <Col span={2}>
                        <BaseModal/>
                        <Button
                            style={{width:"100%", margin:"4px"}}
                            type={'primary'}
                            disabled={store.selected.length <= 0}
                            onClick={this.sendData}
                        >Send</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
