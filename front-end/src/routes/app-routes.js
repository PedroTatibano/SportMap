import Cadastro from "../screens/cadastro";
import Conta from "../screens/conta";
import EditarCadastro from "../screens/editarCadastro";
import EditarNome from "../screens/editarNome";
import Favoritos from "../screens/favoritos";
import Historico from "./../screens/historico/index";
import Login from "../screens/login";
import MeuPerfil from "../screens/meuPerfil";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "../screens/principal";
import React from "react";
import TelaEntrada from "../screens/telaEntrada";
import TelaPrincipal from "../screens/telaPrincipal";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TelaPrincipal"
      >
        <Stack.Screen name="TelaEntrada" component={TelaEntrada} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="EditarCadastro" component={EditarCadastro} />
        <Stack.Screen name="EditarNome" component={EditarNome} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Meu Perfil" component={MeuPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;