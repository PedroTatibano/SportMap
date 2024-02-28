import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import para as telas:
import TelaEntrada from "./src/assets/Screens/TelaEntrada";
import Login from "./src/assets/Screens/Login";
import Cadastro from "./src/assets/Screens/Cadastro";
import Cidade from "./src/assets/Screens/Cidade";
import Esporte from "./src/assets/Screens/Esporte";
import Principal from "./src/assets/Screens/Principal";
import TelaPrincipal from "./src/assets/Screens/TelaPrincipal";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="TelaEntrada"
      >
        <Stack.Screen name="TelaEntrada" component={TelaEntrada}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cidade" component={Cidade}/>
        <Stack.Screen name="Esporte"component={Esporte}/>
        <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
