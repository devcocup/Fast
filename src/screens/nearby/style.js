'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: 50
    },

    backButton: {
        marginLeft: 20,
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 23,
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    searchButton: {
        marginRight: 20
    },

    categoryContainer: {
        marginTop: 15,
    },

    selectedButton: {
        borderRadius: 10,
        height: 35,
        width: 100,
        backgroundColor: '#665EFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    selectedButtonText: {
        color: 'white',
        fontFamily: 'Ubuntu-B',
        fontSize: 15
    },

    button: {
        height: 35,
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    buttonText: {
        color: '#707070',
        fontFamily: 'Ubuntu-B',
        fontSize: 15
    },

    bodyContainer: {
        flex: 1,
        marginTop: 15
    }

});

export default styles;