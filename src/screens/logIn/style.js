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

    bodyContainer: {
        width: width * 0.6,
        marginTop: '20%'
    },

    textInput: {
        // width: width * 0.6,
        color: 'white',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    }
});

export default styles;