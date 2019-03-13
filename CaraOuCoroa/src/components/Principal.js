import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const sobre = require('../imgs/sobre_jogo.png');
const outrosJogos = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={css.view}>
        <View style={css.tela}>
          <Image source={logo} />

          <TouchableHighlight
            onPress={() => { Actions.Resultado(); }}>
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>
        <View style={css.rodape}>
          <TouchableHighlight
            onPress={() => { Actions.SobreJogo(); }}>
            <Image source={sobre} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.OutrosJogos(); }}>
            <Image source={outrosJogos} />
          </TouchableHighlight>
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
