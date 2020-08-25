import {StyleSheet,Dimensions} from "react-native";

let {width,height}=Dimensions.get("window");

export let TextFieldStylesheet=StyleSheet.create({
  Main:{
    flexDirection:'column',
    width:width,
    height:height,
    fontSize:24,
    justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  AppBar:{
    width:width,
    height:height/2,
    backgroundColor:'#313131',
  },
  ContentAppBar:{
    flexDirection:'row',
    fontSize:24,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  }
});
