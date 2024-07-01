import React, { useEffect, useState } from "react";

import Map from "../../components/map";
import TabBar from "../../components/tabBar";
import { VerificarToken } from "../login/loginComponents/verifica";
import { View } from "react-native";
import styles from "./styles";

const TelaPrincipal = ({ navigation, route }) => {
  
  const [autenticacaoVerificada, setAutenticacaoVerificada] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const tokenExists = await VerificarToken(navigation);
      if (!tokenExists) {
        navigation.navigate("Login");
      } else {
        setAutenticacaoVerificada(true);
        const marker = route.params?.selectedMarker;
        if (marker) {
          setSelectedMarker(marker);
        }
      }
    };
    verificarAutenticacao();
  }, [navigation, route.params?.selectedMarker]);

  return (
    <View style={styles.Container}>
      <View style={styles.Map}>
        <Map navigation={navigation} route={route} selectedMarker={selectedMarker} />
      </View>
      <View style={styles.cardMap}>
        <TabBar tela={"principal"} />
      </View>
    </View>
  );
};

export default TelaPrincipal;
