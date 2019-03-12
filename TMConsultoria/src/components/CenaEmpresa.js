import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe_empresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    //style={css.barraStatus}
                    backgroundColor='#EC7148' 
                />
                <BarraNavegacao voltar navigator={this.props.navigator}  corDeFundo={'#EC7148'}/>
                <View style={css.cabecalho}>
                    <Image source={detalhe_empresa} />
                    <Text style={css.txtTitulo}>Empresa</Text>
                </View>
                <View style={css.corpo}>
                    <Text style={css.txtCorpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida mattis libero sit amet feugiat. Nunc volutpat augue quis tellus faucibus, ut luctus diam condimentum.</Text>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    barraStatus: {
        backgroundColor: '#EC7148'
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
        color: '#EC7148'
    },
    corpo: {
        marginTop: 20,
        marginLeft: 10
    },
    txtCorpo: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
