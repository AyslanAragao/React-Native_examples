/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

 class JoKenPo extends Component {

  constructor(props){
    super(props);

    this.state={ escolhaUsuario: ''}
  }

  jokenpo(escolhadoUsuario){
    this.setState({escolhaUsuario : escolhadoUsuario});
  }

  render() {
    return (
      <View>
        <Text>Escolha do Computador</Text>
        <Text>Escolha do Usuario: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text> 
        <Button title='pedra' onPress={() => { this.jokenpo('pedra')}}/>
        <Button title='papel' onPress={() => { this.jokenpo('papel')}}/>
        <Button title='tesoura' onPress={() => { this.jokenpo('tesoura ')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('JoKenPo', () => JoKenPo);
