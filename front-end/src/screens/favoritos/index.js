import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import BorroVerde from "../../assets/Images/BorroVerde.png";
import BuscarFavs from "./buscarFavs";
import CardsGen from "../../components/Cards/CardsGen";
import Fav from "../../assets/Images/Fav.png";
import Label from "../../components/label";
import TabBar from "../../components/tabBar";
import styles from "./styles";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const dadosFavoritos = await BuscarFavs(userId);
        setFavoritos(dadosFavoritos);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    };
    if (isFocused) {
      carregarFavoritos();
    }
  }, [isFocused]);

  const abrirNaTelaPrincipal = (favorito) => {
    navigation.navigate('TelaPrincipal', { selectedMarker: favorito, favoritado: true});
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />

      <View style={styles.titulo}>
        <Label type="tittle" text="Favoritos" />
        <Image style={styles.img} source={Fav} />
      </View>

      <View style={{ flex: 1 }}>
        {favoritos.map((favorito, index) => (
          <CardsGen
            key={index}
            nome={favorito.nome}
            endereco={favorito.endereco}
            esporte={favorito.esporte}
            acao={() => abrirNaTelaPrincipal(favorito)}
          />
        ))}
      </View>

      <View style={styles.cardMap}>
        <TabBar tela={"favoritos"} />
      </View>
    </View>
  );
};

export default Favoritos;
