'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    backButton: {
        marginLeft: 20,
        marginTop: 20
    },

    headerTitleText: {
        color: 'white',
        fontFamily: 'Nunito-Regular',
        fontSize: 50,
        marginLeft: 20,
        marginTop: 20
    },

    headerDescriptionText: {
        color: 'white',
        fontFamily: 'Ubuntu-LI',
        fontSize: 15
    },

    placeHolderTextContainer: {
        position: 'absolute',
        fontFamily: 'Dreamscape',
        fontSize: 100,
        color: 'rgba(255, 255, 255, 0.2)',
        transform: [{rotate: '-90deg'}],
        bottom: '22%',
        right: '-26%'
    },

    bodyContainer: {
        marginTop: 25,
        marginLeft: 20
    },

    textInput: {
        width: width * 0.6,
        color: 'white',
        fontFamily: 'Nunito-Light',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },

    doneButton: {
        backgroundColor: 'white',
        width: width * 0.7,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 35,
        marginLeft: 20
    },

    policyText: {
        width: width * 0.8,
        color: 'white',
        fontFamily: 'Ubuntu-RI',
        fontSize: 13,
        marginTop: 20,
        marginLeft: 20,
        textAlign: 'center'
    }
});

export default styles;