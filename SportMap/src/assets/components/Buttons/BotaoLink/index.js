import { TouchableOpacity, Text} from "react-native";
import style from "./style";

export default function BotaoLink({
  action,
  text,
}) {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={style.botao}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
