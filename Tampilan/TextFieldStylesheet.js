import {StyleSheet,Dimensions} from "react-native";

let {width}=Dimensions.get("window");

export let TextFieldStylesheet=StyleSheet.create({
  AppBar:{
    width:width,
    height:'50%',
    backgroundColor:'#313131',
  },
  ContentAppBar:{
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  }
});

