'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },

    menuButton: {
        width: 20,
        height: 15,
        resizeMode: 'contain'
    },

    headerText: {
        flex: 1,
        color: '#6A6A6A',
        fontSize: 13,
        marginLeft: 20
    },

    searchButton: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    bodyContainer: {
        margin: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    topContainer: {
        flexDirection: 'row'
    },

    weatherImage: {
        marginLeft: 10,
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },

    countryText: {
        fontSize: 10,
        textAlign: 'center'
    },

    timeContainer: {
        flex: 1,
    },

    timeText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    bodyText: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic'
    },

    // bodyContainer: {
    //     width: width * 0.6,
    //     marginTop: '20%'
    // },

    textInput: {
        // width: width * 0.6,
        color: 'white',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    }
});

export default styles;