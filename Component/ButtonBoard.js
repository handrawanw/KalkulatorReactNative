import React from "react";

import {TouchableOpacity,Text} from "react-native";

import {Styles} from "../Tampilan/ButtonBoardStylesheet";

export default function BTNBoard(props){

  let {Func,Teks}=props;

  return (
    <TouchableOpacity style={Styles.buttons} onPress={Func}>
        <Text style={{color:"white"}}>{Teks}</Text>
    </TouchableOpacity>
  );
}
