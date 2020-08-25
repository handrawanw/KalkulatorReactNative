import React from "react";

import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {reducer} from "./Redux/actionState/ButtonState";

let STORE=createStore(reducer,composeWithDevTools());

export default function Redux(props){
  return (
    <Provider store={STORE}>
      {props.children}
    </Provider>
  );
}