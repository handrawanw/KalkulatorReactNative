import {StyleSheet,Dimensions} from "react-native";

let {width,height}=Dimensions.get("window");

export let Styles=StyleSheet.create({
  BackgroundsBTN:{
    backgroundColor:"#333",
    paddingTop:2.5,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-around',
    width:width,
    height:height,
  },
  ViewBTN:{
    backgroundColor:"#333",
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-around',
    width:width,
    height:height,
  },
});