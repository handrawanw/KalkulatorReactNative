import React from "react";

import {View,Text} from "react-native";

import ButtonBoard from "./ButtonBoard";

import {Styles} from "../Tampilan/MainBoardStylesheet";

import {useDispatch} from "react-redux";
import {INPUT_VALUE,HAPUS_VALUE,TOTAL_VALUE} from "../Store/Redux/actionRedux/ButtonAction";

export default function MainBoard(){

  let dispatch=useDispatch();
  
  return (
    <View style={Styles.ViewBTN}>
          <View>
            <ButtonBoard Teks="C" Func={()=>dispatch(HAPUS_VALUE())} />
            <ButtonBoard Teks="1" Func={()=>dispatch(INPUT_VALUE('1'))} />
            <ButtonBoard Teks="4" Func={()=>dispatch(INPUT_VALUE('4'))} />
            <ButtonBoard Teks="7" Func={()=>dispatch(INPUT_VALUE('7'))} />
            <ButtonBoard Teks="00" Func={()=>dispatch(INPUT_VALUE('00'))} />
          </View>
          <View>
            <ButtonBoard Teks="0" Func={()=>dispatch(INPUT_VALUE('0'))} />
            <ButtonBoard Teks="2" Func={()=>dispatch(INPUT_VALUE('2'))} />
            <ButtonBoard Teks="5" Func={()=>dispatch(INPUT_VALUE('5'))} />
            <ButtonBoard Teks="8" Func={()=>dispatch(INPUT_VALUE('8'))} />
            <ButtonBoard Teks="," Func={()=>dispatch(INPUT_VALUE(','))} />
          </View>
          <View>
            <ButtonBoard Teks="%" Func={()=>dispatch(INPUT_VALUE('%'))} />
            <ButtonBoard Teks="3" Func={()=>dispatch(INPUT_VALUE('3'))} />
            <ButtonBoard Teks="6" Func={()=>dispatch(INPUT_VALUE('6'))} />
            <ButtonBoard Teks="9" Func={()=>dispatch(INPUT_VALUE('9'))} />
            <ButtonBoard Teks="." Func={()=>dispatch(INPUT_VALUE('.'))} />
          </View>
          <View>
            <ButtonBoard Teks="/" Func={()=>dispatch(INPUT_VALUE('/'))} />
            <ButtonBoard Teks="+" Func={()=>dispatch(INPUT_VALUE('+'))} />
            <ButtonBoard Teks="-" Func={()=>dispatch(INPUT_VALUE('-'))} />
            <ButtonBoard Teks="x" Func={()=>dispatch(INPUT_VALUE('*'))} />
            <ButtonBoard Teks="=" Func={()=>dispatch(TOTAL_VALUE())} />
          </View>
    </View>
  );
}

