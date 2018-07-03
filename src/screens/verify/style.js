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

    headerDescriptionText: {
        width: width * 0.85,
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        marginLeft: 20,
        marginTop: 20
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
        flexDirection: 'row',
        marginTop: '18%',
        marginLeft: 20
    },

    textInput: {
        width: 40,
        height: 50,
        color: 'white',
        fontFamily: 'Nunito-Light',
        marginRight: 20,
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1
    },


    verifyContainer: {
        backgroundColor: 'white',
        width: width * 0.7,
        height: 45,
        borderRadius: 20,
        marginTop: '25%',
        marginLeft: 20
    },

    resendContainer: {
        backgroundColor: 'transparent',
        width: width * 0.7,
        height: 45,
        marginTop: 20,
        marginLeft: 20
    }
});

export default styles;