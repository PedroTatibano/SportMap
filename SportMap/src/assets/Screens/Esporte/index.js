import { View, Image } from "react-native";
import style from "./style";

//imports de componentes:
import Label from "../../components/Label";
import EsportesDropdown from "../../components/DropDown/Esportes";
import BotaoPadrao from "../../components/Buttons/BotaoPadrao";

//imports de img e fonts:
import BorroVerde from "../../Images/BorroVerde.png";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function Esporte({ navigation }) {

// função de navegação dos botões
function next(){
  navigation.navigate("Principal")
};

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={style.container}>
      <Image source={BorroVerde} style={style.BorroVerde} />
      <View style={style.containerTxt}>
      <Label
          text={"SPORT"}
          type="logo"
        />
        <Label
          text={"MAP!"}
          type="logo"
          color="verde"
        />
      </View>

    <View style={style.msg}>
      <View style={style.primeiralinha}>
        <Label 
          text={"Quais"} 
          type="tittle"
        />
        <Label 
          text={" esportes "} 
          type="tittle"
          color="verde"
          />
        <Label 
          text={"você"} 
          type="tittle"
          />
    </View>
      <Label 
    text={"pretende praticar?"} 
    type="tittle"
    /> 
    </View>
      <View style={{justifyContent: 'center', textAlign:'center', alignItems: 'center', marginTop: 40,}}>
        <Label
        text={"Escolha pelo menos um!"}
        type="normal"
        />
      </View>
    <View style={style.esporteDrop}>
    <EsportesDropdown/>
    <BotaoPadrao text={"CONFIRMAR"} action={next}/>
    </View>

    </View>
  );
}
