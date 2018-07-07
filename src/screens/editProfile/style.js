'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    headerContainer: {
        width: width,
        alignItems: 'center'
    },

    backButton: {
        position: 'absolute',
        left: 20,
        top: 20
    },

    editButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },

    profileImageButton: {
        width: 65,
        height: 65,
        borderRadius: 10,
        marginTop: 40
    },

    idText: {
        color: 'white',
        fontFamily: 'Ubuntu-R',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 30
    },

    bodyContainer: {

    },

    itemContainer: {
        width: width * 0.8,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 1,
        marginTop: 20
    },

    itemText: {
        fontFamily: 'Nunito-Light',
        fontSize: 13
    },

    textInput: {
        width: width * 0.8,
        fontFamily: 'Nunito-Light',
        fontSize: 13
    },

    birthDayCotainer: {
        width: width * 0.8,
    },

    facebookButtonContainer: {
        marginTop: 20,
        height: 45,
        width: width * 0.7,
        backgroundColor: '#4C6DB4',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;