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
        width: 20,
        height: 16,
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

    headerText: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '800',
        marginLeft: 20,
        height: 80
    },

    bodyText: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic'
    },

    noticeText: {
        width: width * 0.6,
        color: 'white',
        fontSize: 14,
        marginTop: '25%',
        textAlign: 'center'
    },

    textInput: {
        width: width * 0.6,
        color: 'white',
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