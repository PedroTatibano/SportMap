import React from "react";
import { TextInput, View } from "react-native";
import style from "./style";

export default function Input({
  placeholder,
  placeholderColor,
  onChangeText,
  value,
  secureTextEntry,
}) {
  return (
    <View style={style.container}>
      <TextInput
        style={style.inputC}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || "#999999"}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
