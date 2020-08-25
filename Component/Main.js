import React from "react";

import {View} from "react-native";

import {MainStylesheet} from "../Tampilan/MainStylesheet";

export default function Main(props){

  return (
    <View style={MainStylesheet.Main}>
      {props.children}
    </View>
  );
}
