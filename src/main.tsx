import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { App } from "app/index";

// enable MobX strict mode
useStrict(true);

// render react DOM
ReactDOM.render(
    <App/>, document.getElementById('root')
);
