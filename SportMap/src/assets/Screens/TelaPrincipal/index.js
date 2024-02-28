import { View, TouchableOpacity} from "react-native";
import style from "./style";
import InputBusca from "../../components/Inputs/InputBusca";
import Label from "../../components/Label";


export default function TelaPrincipal() {

  function BotaoVoltar(){
    //integrar botão voltar
    };
    function BotaoFavoritos(){
      //integrar BotaoFavoritos
    }

  return (
    <View style={style.Container}>
      <View style={style.ViewInput}>
        <InputBusca placeholder="Pesquise um local" />
      </View>
      <View style={style.Map}></View>

      <View style={style.Menu}>

        <TouchableOpacity style={style.BotaoFavoritos} onPress={BotaoFavoritos}>
        <Label text={'FAVORITOS'} type={'negrito'}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.BotaoVoltar} onPress={BotaoVoltar}>
        <Label text={'VOLTAR'} type={'negrito'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
