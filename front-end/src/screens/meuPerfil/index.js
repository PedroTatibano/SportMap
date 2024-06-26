import { Image, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import Card from "../../components/Cards/Card";
import FotoPerfil from "../../assets/Images/IconPerfil.png";
import ImagemVisual from "../../components/fotoUsuario";
import Label from "../../components/label";
import { Logout } from "../login/loginComponents/logout";
import LogoutImg from "../../assets/Images/Logout.png";
import TabBar from "../../components/tabBar";
import { VerificarToken } from "../login/loginComponents/verifica";
import miniUser from "../../assets/Images/MiniUser.png";
import styles from "./styles";

const MeuPerfil = ({ navigation }) => {
  useEffect(() => {
    VerificarToken();
  }, []);

  async function LogoutPress() {
    const result = await Logout(navigation);
    if (result.success) {
      navigation.navigate("Login");
    }
  }

  function Voltar() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.PrimeiraLinha}>
        <Label text={"Meu perfil"} type={"tittle"} />
      </View>
      <View style={{ marginTop: "5%", alignItems: "center" }}>
        <ImagemVisual foto={FotoPerfil} />
      </View>
      <View style={{ marginTop: 15, alignItems: "center", marginBottom: 30 }}>
        <Label text={"Usuario"} type={"tittle"} />
      </View>

      <View>
        <TouchableOpacity onPress={LogoutPress}>
          <Card text="Fazer Logout" icon={LogoutImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardMap}>
        <TabBar tela={"user"} />
      </View>
    </View>
  );
};

export default MeuPerfil;
