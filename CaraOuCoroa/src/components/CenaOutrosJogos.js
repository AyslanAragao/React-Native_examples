import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const sobre = require('../imgs/sobre_jogo.png');
const outrosJogos = require('../imgs/outros_jogos.png');

export default class CenaOutrosJogos extends Component {
  render() {
    return (
      <View style={css.view}>
        <BarraNavegacao voltar titulo={'Outros Jogos'} />
        <View style={css.tela}>
          <View style={css.colunaEsquerda}>
            <Text>sdsd
            </Text>
          </View>
          <View style={css.colunaDireita}></View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  colunaEsquerda: {
    flex:1,
    borderWidth: 1,
    borderColor: 'yellow'
  },
  colunaDireita: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'blue'
  },
  rodape: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
