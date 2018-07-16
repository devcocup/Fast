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

    linearContainer: {
        borderRadius: 10,
        height: 35,
        width: 100,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    selectedButton: {
        
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
        width: width * 0.7,
        borderRadius: 20,
        paddingLeft: 15,
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
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 25,
    },

    modalDistanceListContainer: {
        marginTop: 10
    },

    selectedDistanceButton: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 30,
        backgroundColor: '#665EFF',
        justifyContent: 'center'
    },

    selectedDistanceButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10
    },

    distanceButton: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 30,
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    distanceButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10
    },

    selectDistanceButton: {
        width: width * 0.5,
        height: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30
    }

});

export default styles;