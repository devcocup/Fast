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
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D8D8D'
    },

    backButton: {
        marginLeft: 10,
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 23,
        alignSelf: 'flex-start'
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
        backgroundColor: '#EF7676',
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
    },

    modalContainer: {
        width: width * 0.85,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    modalCloseButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },

    modalHeaderText: {
        width: 200,
        fontFamily: 'Ubuntu-B',
        fontSize: 14,
        marginTop: 10,
    },

    modalCostText: {
        width: 200,
        fontFamily: 'Ubuntu-BI',
        fontSize: 18,
        color: '#FF9100'
    },

    modalDescriptionText: {
        width: 200,
        fontFamily: 'Ubuntu-LI',
        fontSize: 14,
        color: '#7D7D7D'
    },

    modalTextInput: {
        width: 45,
        height: 45,
        backgroundColor: '#FBFBFB',
        borderColor: '#C1C1C1',
        borderWidth: 1,
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 25,
        padding: 0
    },

    modalButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        borderWidth: 1,
        borderColor: 'green',
        textAlign: 'center'
    },

    modalOrderButton: {
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        marginBottom: 30
    }

});

export default styles;