import React, { Component } from "react";
import { View, Picker } from "react-native";
import EsportesJson from "./esportes.json";
import style from "./style";


class EsportesDropdown extends Component {
    

  state = {
    esportes: [],
    esporteSelecionado: null,
  };

  componentDidMount() {
    this._getElement();
  }

  _getElement = () => {
    const esportes = EsportesJson.Esportes;
    if (esportes) {
      this.setState({ esportes: esportes });
    }
  };

  _onChangeValue = (selecionado) => {
    this.setState({ esporteSelecionado: selecionado });
  };

  render() {
    return (
      <View style={style.view}>
        <Picker
          selectedValue={this.state.esporteSelecionado}
          style={style.esporte}
          onValueChange={this._onChangeValue}
        >
          {this.state.esportes.map((element, index) => (
            <Picker.Item
              key={index}
              label={element.esporte}
              value={element.esporte}
            />
          ))}
        </Picker>
      </View>
    );
  }
}

export default EsportesDropdown;
