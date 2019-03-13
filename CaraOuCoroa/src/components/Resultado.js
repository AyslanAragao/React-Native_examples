import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

  constructor(props) {
    super(props);

    this.state = { resultado: '' };
  }

  componentWillMount() {
    const numeroAleatorio = Math.floor(Math.random() * 2);
    let CaraCoroa = '';

    if (numeroAleatorio === 0) {
      CaraCoroa = 'cara';
    }
    else {
      CaraCoroa = 'coroa';
    }

    this.setState({ resultado: CaraCoroa });
  }
  render() {

    if (this.state.resultado === 'cara') {
      return (
        <View style={css.tela}>
          <Image source={cara} />
        </View>
      );
    } else {
      return (
        <View style={css.tela}>
          <Image source={coroa} />
        </View>
      );
    }

  }
}

const css = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
