import { View, Image } from "react-native";
import style from "./style";

//imports de componentes:
import Label from "../../components/Label";
import Input from "../../components/Inputs/InputLogin";
import BotaoRadio from "../../components/Buttons/BotaoRadio";
import BotaoLink from "../../components/Buttons/BotaoLink";
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
  function esquecSenha(){
    navigation.navigate("")
  };
  function entrar(){
    navigation.navigate("Principal")
  };
  function criarConta(){
    navigation.navigate("Cadastro")
  };

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
          text={"Bem vindo ao SportMap"}
          type="tittle"
        />
      </View>
      <View style={style.Iemail}>
        <View style={style.usuarioContainer}>
          <Label
            text={"USUÁRIO"}
            type="little"
          />
        </View>
        <Input
          placeholder={"Use o email pessoal ou usuário"}
          placeholderColor={"#5F5F5F"}
        />
      </View>

      <View style={style.Isenha}>
        <View style={style.usuarioContainer}>
          <Label
            text={"SENHA"}
            type="little"
          />
        </View>
        <Input placeholder={"Use sua senha"} placeholderColor={"#5F5F5F"} secureTextEntry={true}/>
      </View>

      <View style={style.lembreSenha}>
        <View style={style.lembreDeMim}>
          <BotaoRadio />
          <Label
            text={"Lembre de mim"}
            type="body"
          />
        </View>
        <View style={style.esqueceuSenha}>
          <BotaoLink
            action={esquecSenha}
            text={"Esqueceu a senha?"}
          />
        </View>
      </View>

      <View style={style.botaoEntrar}>
        <BotaoPadrao 
        text={"ENTRAR"}
        action={entrar}/>
      </View>
      <View style={style.naoTemConta}>
        <Label
          text={"Não tem uma conta?"}
          type="body"
        />
        <BotaoLink
          action={criarConta}
          text={"Criar Conta"}
        />
      </View>
    </View>
  );
}
