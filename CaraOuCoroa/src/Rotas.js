import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Principal from './components/Principal';
import Resultado from './components/Resultado';
import OutrosJogos from './components/OutrosJogos';
import SobreJogo from './components/SobreJogo';

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='Principal' component={Principal} title='Cara ou Coroa' initial />
    <Scene key='Resultado' component={Resultado} title='Resultado' />
    <Scene key='OutrosJogos' component={OutrosJogos} title='Outros Jogos' />
    <Scene key='SobreJogo' component={SobreJogo} title='Sobre o Jogo' />
  </Router>
);

export default Rotas;
