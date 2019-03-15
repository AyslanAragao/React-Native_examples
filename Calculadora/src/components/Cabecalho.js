import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={css.topo}>
        <Text style={css.txtTitulo}>Calculadora 1.0</Text>
    </View>
);

const css = StyleSheet.create({
    topo: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color: '#FFF'
    }

});