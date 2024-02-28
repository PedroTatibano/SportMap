import React, { useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { useFonts, Inter_700Bold, Inter_600SemiBold, Inter_400Regular } from "@expo-google-fonts/inter";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import style from "./style";

import Icon from "../../Images/Icone.png";
import BorroVerde from "../../Images/BorroVerde.png";
import Label from "../../components/Label";

export default function TelaEntrada() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Lato_400Regular,
  });

  useEffect(() => {
    const checkAndRequestLocationPermission = async () => {
      try {
        const permissionRequested = await AsyncStorage.getItem('locationPermissionRequested');

        if (!permissionRequested) {
          const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

          if (result !== RESULTS.GRANTED) {
            Alert.alert(
              'Permissão Necessária',
              'O aplicativo precisa de permissão para acessar a localização.',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ]
            );
          }
          await AsyncStorage.setItem('locationPermissionRequested', 'true');
        }
      } catch (error) {
        console.error('Erro ao verificar/solicitar permissão:', error);
      }
    };

    checkAndRequestLocationPermission();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={style.container}>
      <Image source={BorroVerde} style={style.BorroVerde} />
      <Image source={Icon} style={style.Icon} />
      <View style={style.containerTxt}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
    </View>
  );
}
