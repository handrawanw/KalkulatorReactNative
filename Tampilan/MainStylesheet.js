import {StyleSheet,Dimensions} from "react-native";

let {width,height}=Dimensions.get("window");

export let MainStylesheet=StyleSheet.create({
  Main:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    width:width,
    height:height,
    fontSize:24,
  },
});
