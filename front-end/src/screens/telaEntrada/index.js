import { Image, View } from "react-native";
import React, { useEffect } from "react";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import Icon from "../../assets/Images/Icone.png";
import Label from "../../components/label";
import { RequestLocation } from "./requestLocation";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const TelaEntrada = () => {
  const navigation = useNavigation();
  const permission = RequestLocation();

  useEffect(() => {
    permission();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <Image source={Icon} style={styles.Icon} />
      <View style={styles.containerTxt}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
    </View>
  );
};

export default TelaEntrada;
