import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {

  constructor(props) {
    super(props)

    this.state = { ListaItens: [] };
  }


  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { this.setState({ ListaItens: response.data }); })
      .catch(() => { console.log('Deu erro'); });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#DDD'}}>
        {
          this.state.ListaItens.map(item => <Itens key={item.titulo} objeto={item} />)
        }
      </ScrollView>
    );
  }
}
