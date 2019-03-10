import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={css.CaixaItem}>
        <View style={css.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.objeto.foto }} />
        </View>
        <View style={css.detalheItem}>
          <View >
            <Text style={css.titulo}>{this.props.objeto.titulo}</Text>
            <Text style={css.valor}>R$ {this.props.objeto.valor}</Text>
          </View>
          <View style={css.detalheItemDataLocal}>
            <Text style={css.local}>Local: {this.props.objeto.local_anuncio}</Text>
            <Text style={css.data}>Dt Anuncio: {this.props.objeto.data_publicacao}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  CaixaItem: {
    borderWidth: 0.5,
    borderColor: '#ca4200',
    backgroundColor: '#FFF',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    height: 102,
    width: 102
  },
  detalheItem: {
    flex: 1,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  }, valor: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  detalheItemDataLocal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
  ,
  local: {

  }, data: {

    //alignItems: 'stretch'
  }
});

