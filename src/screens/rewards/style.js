'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 20,
        marginTop: 15
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    buttonContainer: {
        borderRadius: 10,
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 15
    },

    bodyContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: height * 0.7,
        marginTop: 30,
        padding: 10
    }
});

export default styles;