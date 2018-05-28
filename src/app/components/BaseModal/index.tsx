import * as React from 'react';
import { Component, Fragment } from 'react'
import {Modal, Button, List} from 'antd';
import FormulationItem from "app/components/FormulationItem";

import fstore from 'app/stores/FormulationsStore';
import {observer} from "mobx-react";
import {action} from "mobx";
import * as mobx from "mobx";

@observer
class ModalComp extends Component {
    @action showModal = () => {
        fstore.modal.visible = true;
    };

    @action handleCancel = () => {
        fstore.modal.visible = false;
    };

    render() {
        return (
            <Fragment>
                <Button
                    style={{width:"100%", margin:"4px"}}
                    onClick={this.showModal}
                >Load base...</Button>

                <Modal
                    title="Basic Modal"
                    visible={fstore.modal.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <List
                        itemLayout="vertical"
                        dataSource={mobx.toJS(fstore.formulations)}
                        renderItem={item => (
                            <List.Item>
                                <FormulationItem key={item.id} formulation={item} />
                            </List.Item>
                        )}
                    />
                </Modal>
            </Fragment>
        );
    }
}

export default ModalComp;