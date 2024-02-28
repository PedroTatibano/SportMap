import { View, Image, Text, TouchableOpacity } from "react-native";
import style from "./style";

//imports de componentes:
import Label from "../../components/Label";

//imports de img e fonts:
import Icone from "../../Images/Icone.png"
import Compass from "../../Images/Compass.png"
import IconPerfil from "../../Images/IconPerfil.png"
import BorroVerde from "../../Images/BorroVerde.png";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Lato_400Regular } from "@expo-google-fonts/lato";


export default function Login({ navigation }) {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // função de navegação dos botões


  return (
    <View style={style.container}>
      <Image source={BorroVerde} style={style.BorroVerde}/>
      <View style={style.botao}>
        <TouchableOpacity style={style.botaoPerfil}>
          <Image source={IconPerfil} style={style.perfil}/>
          <Text 
          style={style.textPerfil}>
            PERFIL
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[style.containerTxt ,style.containerTxt2]}>
      <Label
          text={"DAR UM"}
          type="logo"
        />
        </View>
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
      <View style={style.botao}>
        <TouchableOpacity style={style.botaoLocal}>
          <Image source={Icone} style={style.icone}/>
          <Text 
          style={style.textLocal}>
            SPORTMAP!
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={style.botao}>
        <TouchableOpacity style={style.botaoCompass}>
          <Image source={Compass} style={style.compass}/>
          <Text 
          style={style.textPerfil}>
            LOCAIS
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
