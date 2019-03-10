import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { ListaItens } from './src/components/ListaItens';

export default class CatalagoItens extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('CatalagoItens', () => CatalagoItens);
