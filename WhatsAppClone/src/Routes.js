import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormCadastro from './components/formCadastro';
import FormLogin from './components/formLogin';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='Login' component={FormLogin} title='Login de Entrada' initial />
    <Scene key='Cadastro' component={FormCadastro} title='Cadastro Novo Usuario' />
  </Router>
);

export default Routes;
