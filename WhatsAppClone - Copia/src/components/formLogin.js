import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
  <View style={css.tela}>
    <View style={css.topo}>
      <Text style={css.titulo}>WhatsApp Clone</Text>
    </View>
    <View style={css.form}>
      <TextInput style={css.txtBox} placeholder='Email' />
      <TextInput style={css.txtBox} placeholder='Senha' />
      <Text style={css.txtMsg}>Ainda não se cadastrou? Cadastre-se</Text>
    </View>
    <View style={css.rodape}>
      <Button color='#115e54' title='Acessar' onPress={() => false} />
    </View>
  </View >
);

const css = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10
  },
  topo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25
  },
  form: {
    flex: 2
  },
  txtBox: {
    fontSize: 20,
    height: 45,
  },
  txtMsg: {
    fontSize: 20
  },
  rodape: {
    flex: 2
  },
  botao: {
    color: '#115e54'
  }
});
