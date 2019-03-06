import React from 'react';
import {Text,AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

const Estilos = {
principal:{ 
  flex:1,
  justifyContent: 'center',
  alignItems: 'center', 
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textoBotao:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
};
 
const gerarNovaFrase = () => {
 var numeroaleatorio = Math.random();
 numeroaleatorio = Math.floor(numeroaleatorio * 5);

 var frases = Array();
 frases[0]='Esquece, levanta a cabeça. Segue em frente. Amanhã é um novo dia.';
 frases[1]='Às vezes uma coisa boa acaba para que outra melhor comece.';
 frases[2]='Se você não lutar por alguma coisa, será vencido por qualquer coisa.';
 frases[3]='Às vezes você tem que levantar sozinho e seguir em frente...';
 frases[4]='Jamais desista de ser feliz.';

 var frasesEscolhida = frases[numeroaleatorio];
 Alert.alert(frasesEscolhida);  
} 

const App = () => {
 
  const {principal, botao, textoBotao} = Estilos;
   

  return( 
    <View style={principal}>
      <Image source={require('./imgs/logo.png')}/> 
      <TouchableOpacity 
      onPress={gerarNovaFrase} 
      style={botao}>
        <Text style={textoBotao}> Nova Frase </Text>
      </TouchableOpacity>
    </View>
  ); 
};

AppRegistry.registerComponent('FrasesDoDia', () => App);  