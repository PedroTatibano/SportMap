import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  estados: {
    width: 90,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    height: 48,
    backgroundColor: "#0E0E0E",
    borderWidth: 0,
    borderRightWidth: 2, 
    borderColor: '#ffffff', 
    textAlignVertical: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16
  },
  cidade: {
    height: 48,
    width: 230,
    backgroundColor: "#0E0E0E",
    borderColor: 'transparent',
    borderLeftWidth: 1,
    textAlignVertical: 'center',
    color: '#ffffff',
    textAlign: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    fontSize: 16
  },

});
