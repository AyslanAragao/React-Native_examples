import React from 'react';
import { View, Button, TextInput } from 'react-native';

export default props => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 4, justifyContent: 'center' }}>
      <TextInput placeholder='Nome' style={{ fontSize: 20 }} />
      <TextInput placeholder='Email' style={{ fontSize: 20 }} />
      <TextInput placeholder='Senha' style={{ fontSize: 20 }} />
    </View>
    <View style={{ flex: 1 }}>
      <Button title='Cadastrar' color='#115e54' onPress={() => false} />
    </View>
  </View>
);
