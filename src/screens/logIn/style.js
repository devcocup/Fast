'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "20%",
    },

    headerImage: {
        width: 60,
        height: 90,
        resizeMode: 'contain'
    },

    headerTitleText: {
        color: 'white',
        fontFamily: 'Dreamscape',
        fontSize: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 20,
        height: 80
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
        flexDirection: 'column',
        backgroundColor: 'white',
        width: width * 0.8,
        marginTop: '20%',
        borderRadius: 20
    },

    emailContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    separateLine: {
        height: 1,
        backgroundColor: '#E2E2E2'
    },

    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputIcon: {
        margin: 20,
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    textInput: {
        flex: 1,
        fontFamily: 'Nunito-Light',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        color: '#1E81CE'
    },

    loginButtonContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E81CE',
        height: 60,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    signupContainer: {
        width: width * 0.8,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 20
    }
});

export default styles;