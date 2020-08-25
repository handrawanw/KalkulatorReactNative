import React from "react";

import {View,Text,Dimensions} from "react-native";

import {TextFieldStylesheet} from "../Tampilan/TextFieldStylesheet";

import {Appbar} from "react-native-paper";

import {useSelector} from "react-redux";

export default function TextFields(){

  let {value,total}=useSelector((state)=>state);

  return (
    <Appbar style={TextFieldStylesheet.AppBar}>
     <Appbar.Content style={TextFieldStylesheet.ContentAppBar} title={value} />
    </Appbar>
  );
}
