import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe_servicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    //style={css.barraStatus}
                    backgroundColor='#19D1C8'  

                />
                <BarraNavegacao voltar navigator={this.props.navigator}  corDeFundo={'#19D1C8'}/>
                <View style={css.cabecalho}>
                    <Image source={detalhe_servicos} />
                    <Text style={css.txtTitulo}>Nossos Serviços</Text>
                </View>
                <View style={css.corpo}>
                    <Text style={css.txtCorpo}> - Consultoria </Text>
                    <Text style={css.txtCorpo}> - Processo </Text>
                    <Text style={css.txtCorpo}> - Acompanhamento de Projetos </Text>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    barraStatus: {
        backgroundColor: '#19D1C8'
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
        color: '#19D1C8'
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
