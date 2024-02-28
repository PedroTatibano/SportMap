import React from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import Buscar from '../../../Images/buscar.png';
import X from '../../../Images/x.png';

import style from './style';

export default function InputBusca({
  placeholder,
  placeholderColor,
  onChangeText,
  value,
  action
}) {
  return (
    <View style={style.Container}>
      <Image source={Buscar} style={style.Buscar} />
      <TextInput
        style={style.inputB}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || '#fff'}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={action}>
        <Image source={X} style={style.x} />
      </TouchableOpacity>
    </View>
  );
}
