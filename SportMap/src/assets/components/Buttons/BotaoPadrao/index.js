import {Text, TouchableOpacity} from 'react-native'
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import style from './style'

import Label from '../../Label';

export default function BotaoPadrao({
    action,
    text,
}){

useFonts({ Inter_700Bold });

return(
    <TouchableOpacity style={style.botao} onPress={action}>
    <Label type="body" color="preto" text={text}/>
    </TouchableOpacity>
)

}