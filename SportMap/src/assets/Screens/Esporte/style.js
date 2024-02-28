import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2122",
  },
  BorroVerde: {
    width: "100%",
    height: windowHeight * 0.5,
    position: "absolute",
    top: 0,
    right: 0,
  },
  containerTxt: {
    paddingTop: windowHeight * 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  msg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: windowHeight * 0.08,
  },
  primeiralinha: {
    flexDirection: "row",
  },
  esporteDrop:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.08,
    gap: windowHeight * 0.08
  },
});
