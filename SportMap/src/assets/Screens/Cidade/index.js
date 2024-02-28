import { View, Image } from "react-native";
import style from "./style";

//imports de componentes:
import Label from "../../components/Label";
import LocationDropdown from "../../components/DropDown/Cidade";
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

export default function Cidade({ navigation }) {

// função de navegação dos botões
function next(){
  navigation.navigate("Esporte")
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
      <View style={style.saudacao}>
        <Label
          text={"Seja bem vindo(a)!"}
          type="tittle"
        />
      </View>

    <View style={style.msg}>
      <View style={style.primeiralinha}>
        <Label 
          text={"Por favor, escolha a sua"} 
          type="normal"
        />
        <Label 
          text={" cidade "} 
          type="normal"
          color="verde"
        />
</View>

      <Label 
        text={"para personalizar sua experiência "} 
        type="normal"
      /> 
      <Label 
        text={"no aplicativo"}
        type="normal"
      /> 
    </View>
    <View style={style.locationDrop}>
    <LocationDropdown/>
    <BotaoPadrao text={"CONFIRMAR"} action={next}/>
    </View>

    </View>
  );
}
