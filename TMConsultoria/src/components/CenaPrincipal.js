import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    backgroundColor='#c0c0c0'
                />
                <BarraNavegacao />
                <View style={css.tela}>
                    <View style={css.logo}>
                        <Image source={logo} />
                    </View>
                    <View style={css.clienteContato}>
                        <TouchableHighlight
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'clientes' })
                            }}
                        >
                            <Image source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                         underlayColor={'#61BD8C'}
                         activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'contatos' })
                            }}
                        >
                            <Image source={menuContato} />
                        </TouchableHighlight>

                    </View>
                    <View style={css.empresaServicos}>
                        <TouchableHighlight
                         underlayColor={'#EC7148'}
                         activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' })
                            }}
                        >
                            <Image source={menuEmpresa} />
                        </TouchableHighlight>

                        <TouchableHighlight
                         underlayColor={'#19D1C8'}
                         activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'servicos' })
                            }}
                        >
                            <Image source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    tela: {
        // padding: 20,
        alignSelf: 'center',
    },
    logo: {
        paddingVertical: 20
    },
    clienteContato: {
        //flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    empresaServicos: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
