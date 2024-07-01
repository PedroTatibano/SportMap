import { Image, View } from "react-native";
import React, { useState } from "react";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import BotaoLink from "../../components/buttons/botaoLink";
import BotaoPadrao from "../../components/buttons/botaoPadrao";
import Input from "../../components/inputs/inputLogin";
import Label from "../../components/label";
import { LoginRoute } from "./loginComponents/login";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const CriarConta = () => {
    navigation.navigate("Cadastro");
  };

  const LoginPress = async () => {
    const result = await LoginRoute(email, senha);

    if (result.success) {
      navigation.navigate("Principal");
    } else {
      alert("Credenciais Invalidas");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.containerTxt}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
      <View style={styles.saudacao}>
        <Label text={"Bem vindo ao SportMap"} type="tittle" />
      </View>
      <View style={styles.Iemail}>
        <View style={styles.usuarioContainer}>
          <Label text={"EMAIL"} type="little" />
        </View>
        <Input
          placeholder={"Use o email pessoal ou usuário"}
          placeholderColor={"#5F5F5F"}
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <View style={styles.Isenha}>
        <View style={styles.usuarioContainer}>
          <Label text={"SENHA"} type="little" />
        </View>
        <Input
          placeholder={"Use sua senha"}
          placeholderColor={"#5F5F5F"}
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
        />
      </View>

      <View style={styles.botaoEntrar}>
        <BotaoPadrao text={"ENTRAR"} action={LoginPress} />
      </View>
      <View style={styles.naoTemConta}>
        <Label text={"Não tem uma conta?"} type="body" />
        <BotaoLink action={CriarConta} text={"Criar Conta"} />
      </View>
    </View>
  );
};

export default Login;
