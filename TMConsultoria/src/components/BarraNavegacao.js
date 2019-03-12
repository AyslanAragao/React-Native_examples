import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');
//const corCena = this.props.cor == null ? '#c0c0c0' : this.props.cor;
export default class BarraNavegacao extends Component {
    render() {
        if (this.props.voltar) {
            return (
                <View style={[css.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
                    <TouchableHighlight
                     underlayColor={this.props.corDeFundo}
                     activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.pop();
                        }}>
                        <Image source={btnVoltar} />
                    </TouchableHighlight>
                    <Text style={css.titulo}>ATM COnsultoria</Text>
                </View>
            );
        }
        return (
            <View style={css.barraTitulo}>
                <Text style={css.titulo}>ATM COnsultoria</Text>
            </View>
        );
    }
}

const css = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#c0c0c0',
        padding: 10,
        height: 60,
        flexDirection: 'row',
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
