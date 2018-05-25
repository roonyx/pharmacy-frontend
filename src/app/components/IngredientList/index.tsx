// import * as React from 'react';
// import { Fragment, Component } from 'react'
// import Ingredient from 'app/components/Ingredient'
// // import store from "app/stores/IngredientsStore";
// import {observer} from "mobx-react";
// // import IngredientModel from "app/models/IngredientModel";
//
// // import {default as Ingredient} from "app/components/Ingredient";
//
// export interface IngredientProps {
//     store: any;
// }
//
// @observer
// class IngredientList extends Component<IngredientProps> {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <Fragment>
//                 {this.props.store.unselected.map((ingr) => {
//                     return <Ingredient key={ingr.id} ingredient={ingr}/>
//                 })}
//             </Fragment>
//
//         );
//     }
// }
//
// export default IngredientList;