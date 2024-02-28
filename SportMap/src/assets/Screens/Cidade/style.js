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
    paddingTop: windowHeight * 0.14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  saudacao: {
    marginTop: 50,
    alignItems: "center",
  },
  msg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: windowHeight * 0.05,
  },
  primeiralinha: {
    flexDirection: "row",
  },
  locationDrop:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.08,
    gap: windowHeight * 0.04
  },
});
