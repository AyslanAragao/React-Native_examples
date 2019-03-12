import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe_contato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    //style={css.barraStatus}
                    backgroundColor='#61BD8C' 
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo={'#61BD8C'} />
                <View style={css.cabecalho}>
                    <Image source={detalhe_contato} />
                    <Text style={css.txtTitulo}>Contatos</Text>
                </View>
                <View style={css.detalhe_contato}>
                    <Text style={css.txtDetalhe}>Tel: (79) 30252442</Text>
                    <Text style={css.txtDetalhe}>Cel: (79) 999610555</Text>
                    <Text style={css.txtDetalhe}>Email: ayslan.aragao@outlook.com</Text>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    barraStatus: {
        backgroundColor: '#61BD8C'
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 25,
        fontSize: 30,
        color: '#61BD8C'
    },
    detalhe_contato: {
        marginTop: 20,
        marginLeft: 10
    },
    txtDetalhe: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
