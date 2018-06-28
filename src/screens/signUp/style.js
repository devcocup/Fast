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

    title: {
        width: width,
        color: 'white',
        fontSize: 30,
        textAlign: 'left',
        marginTop: '20%',
        marginLeft: '20%'  
    },

    bodyContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        width: width * 0.8,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 30,
        paddingBottom: 30
    },

    textInput: {
        color: 'white',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },

    signupButton: {
        backgroundColor: 'white',
        width: width * 0.8,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20
    },

    policyText: {
        width: width * 0.8,
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: '20%'
    }
});

export default styles;