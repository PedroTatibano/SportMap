import Cadastro from "../Screens/Cadastro";
import Conta from "../Screens/Conta";
import EditarCadastro from "../Screens/EditarCadastro";
import EditarNome from "../Screens/EditarNome";
import Favoritos from "../Screens/Favoritos";
import Historico from "./../Screens/Historico/index";
import Login from "../Screens/Login";
import MeuPerfil from "../Screens/MeuPerfil";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "../Screens/Principal";
import React from "react";
import TelaEntrada from "../Screens/TelaEntrada";
import TelaPrincipal from "../Screens/TelaPrincipal";
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