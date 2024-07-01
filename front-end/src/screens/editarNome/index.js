import { Image, View } from "react-native";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import BotaoPadrao from "../../components/buttons/botaoPadrao/index.js";
import BotaoVoltar from "../../components/buttons/botaoVoltar";
import FotoPerfil from "../../assets/Images/fotoperfil.png";
import ImagemVisual from "../../components/fotoUsuario";
import Input from "../../components/inputs/inputLogin/index.js";
import Label from "../../components/label";
import NoClickInput from "../../components/inputs/inputNaoClicavel";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const EditarNome = () => {
  const navigation = useNavigation();

  const Voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.PrimeiraLinha}>
        <BotaoVoltar action={Voltar} />
        <Label text={"Alteração de nome"} type={"tittle"} />
      </View>
      <View style={{ marginTop: "5%" }}>
        <ImagemVisual foto={FotoPerfil} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Label text={"Usuario"} type={"tittle"} />
      </View>
      <View style={styles.inputView}>
        <NoClickInput
          placeholderx={"NOME DO USUARIO"}
          TextoLabel={"NOME REGISTRADO"}
        />
      </View>
      <View style={styles.inputView}>
        <View style={{ marginLeft: "10%", marginBottom: "2%" }}>
          <Label text={"NOME DESEJADO"} type={"medium"} />
        </View>
        <Input placeholder={"NOME DO USUARIO"} />
      </View>
      <View style={{ marginTop: "12%" }}>
        <BotaoPadrao text={"Confirmar"} />
      </View>
    </View>
  );
};

export default EditarNome;
