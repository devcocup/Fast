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

    loginButton: {
        backgroundColor: 'white',
        width: width * 0.6,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 100
    },

    facebookButton: {
        backgroundColor: '#4C6DB4',
        width: width * 0.6,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10
    },

    signupButton: {
        backgroundColor: 'white',
        width: width * 0.6,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10
    }
});

export default styles;