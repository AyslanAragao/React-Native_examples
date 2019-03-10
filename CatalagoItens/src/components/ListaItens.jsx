import React, { Component } from 'react';
import { View } from 'react-native';
import { Itens } from './Itens';
import { axios } from 'axios';

export default class ListaItens extends Component {
  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { console.log(response); })
      .catch(() => { console.log('Deu erro'); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Itens />
        <Itens />
        <Itens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CatalagoItens', () => CatalagoItens);
