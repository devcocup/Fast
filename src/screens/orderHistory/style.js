'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    backButton: {
        marginTop: 20,
        marginLeft: 20
    },

    headerContainer: {
        width: width,
        paddingBottom: 100,
        alignItems: 'center'
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 23,
        color: 'white'
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },

    bodyContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: width * 0.8,
        height: height * 0.6,
        marginTop: -100
    },
    
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20
    },

    buttonContainer: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default styles;