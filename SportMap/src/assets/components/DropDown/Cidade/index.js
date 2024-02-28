import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import JSONCidades from './cidades.json';
import style from './style';

class LocationDropdown extends Component{
  state = {
    uf: null,
    cidade: null,
    cidadesDoEstado: [],
  };

  

  _getItem = (val) => {
    const estadoSelecionado = JSONCidades.estados.find((element) => val === element.sigla);
    if (estadoSelecionado) {
      this.setState({ cidadesDoEstado: estadoSelecionado.cidades });
    }
  };

  _onChageValue = (value) => {
    this.setState({ uf: value, cidade: null });
    this._getItem(value);
  };

  _onChageValue2 = (value) => {
    this.setState({ cidade: value });
  };

  render() {
    return (
      <View style={style.view}>
        <Picker
          selectedValue={this.state.uf}
          style={style.estados}
          onValueChange={this._onChageValue}
        >
          {JSONCidades.estados.map((element, index) => (
            <Picker.Item key={index} label={element.sigla} value={element.sigla}/>
          ))}
        </Picker>

        <Picker
          selectedValue={this.state.cidade}
          style={style.cidade}
          onValueChange={this._onChageValue2}
          enabled={this.state.uf !== null} 
        >
          {this.state.cidadesDoEstado.map((cidade, index) => (
            <Picker.Item key={index} label={cidade} value={cidade}/>
          ))}
        </Picker>
      </View>
    );
  }
}

export default LocationDropdown;
