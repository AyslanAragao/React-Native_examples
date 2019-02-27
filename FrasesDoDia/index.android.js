import React from 'react';
import {Text,AppRegistry} from 'react-native';

const Estilos = {
estiloTexto:{
  fontSize:20, 
  backgroundColor: '#0000FF',
  height: 50,
  fontStyle: 'normal',
  color: '#EFF1C5'
  }
};

const App = () => {
  return(
    <Text style={Estilos.estiloTexto}>Agora será o app "Frases do Dia"</Text>
  );
};

AppRegistry.registerComponent('FrasesDoDia', () => App); 