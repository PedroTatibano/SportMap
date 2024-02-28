import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import style from "./style";

export default function BotaoRadio({ onPress }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (onPress) {
      onPress(!pressed);
    }
  };

  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        style={[
          style.button,
          { backgroundColor: pressed ? "#64E3A1" : "#0E0E0E" },
        ]}
        onPress={handlePress}
      />
    </View>
  );
}
