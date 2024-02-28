import { View, Image } from "react-native";
import style from "./style";

//imports de componentes:
import Label from "../../components/Label";
import Input from "../../components/Inputs/InputLogin";
import BotaoRadio from "../../components/Buttons/BotaoRadio";
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

export default function Cadastro({ navigation }) {

    // função de navegação dos botões
    function login(){
    navigation.navigate("Login")
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
                <View style={style.logo}>
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
            <View style={style.containerTxt}>
                <Label
                    text={"CRIE UM "}
                    type="tittle"
                />
                <Label
                    text={"CADASTRO"}
                    type="tittle"
                    color="verde"
                />
            </View>
            <View style={style.username}>
                <View style={style.usuarioContainer}>
                    <Label
                        text={"USERNAME:"}
                        type="little"
                    />
                </View>
                <Input
                />
            </View>

            <View style={style.username}>
                <View style={style.usuarioContainer}>
                    <Label
                        text={"EMAIL:"}
                        type="little"
                    />
                </View>
                <Input
                />
            </View>

            <View style={style.username}>
                <View style={style.usuarioContainer}>
                    <Label
                        text={"DATA DE NASCIMENTO:"}
                        type="little"
                    />
                </View>
                <Input
                />
            </View>

            <View style={style.username}>
                <View style={style.usuarioContainer}>
                    <Label
                        text={"SENHA:"}
                        type="little"
                    />
                </View>
                <Input
                />
            </View>

            <View style={style.username}>
                <View style={style.usuarioContainer}>
                    <Label
                        text={"CONFIRMAR SENHA:"}
                        type="little"
                    />
                </View>
                <Input
                />
            </View>

            <View style={style.termos}>
                <View style={style.lembreDeMim}>
                    <BotaoRadio />
                    <Label
                        text={"Concordo com os termos e serviços."}
                        type="body"
                    />
                </View>
            </View>

            <View style={style.botaoCriar}>
                <BotaoPadrao 
                text={"CRIAR CONTA"} 
                action={login}/>
            </View>
        </View>
    );
}
