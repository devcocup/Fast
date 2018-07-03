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

    backButton: {
        position: 'absolute',
        left: 20,
        top: 20
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

    noticeText: {
        width: width * 0.8,
        color: 'white',
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        marginTop: '25%',
        textAlign: 'center'
    },

    textInput: {
        width: width * 0.6,
        color: 'white',
        fontFamily: 'Nunito-Light',
        marginTop: 35,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },

    sendButton: {
        backgroundColor: 'white',
        width: width * 0.6,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 35
    }
});

export default styles;