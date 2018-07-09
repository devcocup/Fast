'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },

    buttonsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 30
    },

    buttonContainer: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    buttonText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    }
});

export default styles;