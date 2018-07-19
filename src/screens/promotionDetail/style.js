'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1
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

    downloadButton: {
        marginRight: 20
    },

    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
    },

    imageStyle: {
        marginTop: 15,
        width: 245,
        height: 320,
        resizeMode: 'contain'
    },

    infoContainer: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 30,
        marginLeft: 10,
        marginRight: 10
    },

    dateText: {
        fontSize: 12,
        color: '#454F63',
        marginLeft: 10
    },

    titleText: {
        marginTop: 5,
        fontFamily: 'Ubuntu-B',
        fontSize: 15,
        color: '#454F63',
        textAlign: 'center'
    },

    categoryText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 15,
        color: '#454F63',
        textAlign: 'center'
    },

    descriptionText: {
        marginTop: 15,
        fontSize: 12,
        color: '#78849E'
    },

    termsContainer: {
        marginTop: 20
    },

    termsTitleText: {
        fontSize: 12,
        color: '#78849E',
        fontWeight: 'bold'
    },

    termText: {
        fontSize: 12,
        color: '#78849E'
    },

    otherText: {
        fontSize: 12,
        color: '#78849E',
        marginTop: 20
    }

});

export default styles;