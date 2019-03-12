import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';


const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    //style={css.barraStatus}
                    backgroundColor='#B9C941'
                />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo={'#B9C941'} />
                <View style={css.cabecalho}>
                    <Image source={detalheClientes} />
                    <Text style={css.txtTitulo}>Nossos Clientes</Text>
                </View>
                <View style={css.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={css.txtDetalhe}>Lorem ipsum dolorem</Text>
                </View>
                <View style={css.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={css.txtDetalhe}>Lorem ipsum dolorem</Text>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    barraStatus: {
        backgroundColor: '#B9C941'
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 20,
        fontSize: 30,
        color: '#B9C941'
    },
    detalheCliente: {
        marginTop: 10,
        marginLeft: 20
    },
    txtDetalhe: {
        marginLeft: 20,
        fontSize: 15
    }
});
