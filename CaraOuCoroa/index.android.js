import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';
import CenaOutrosJogos from './src/components/CenaOutrosJogos';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const sobre = require('./src/imgs/sobre_jogo.png');
const outrosJogos = require('./src/imgs/outros_jogos.png');

export default class CaraOuCoroa extends Component {
  render() {
    return (
      <View style={css.view}>
        <BarraNavegacao />
        <View style={css.tela}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View style={css.rodape}>
          <Image source={sobre} />
          <Image source={outrosJogos} />
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#61bd8c'
  },
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('CaraOuCoroa', () => CenaOutrosJogos);
