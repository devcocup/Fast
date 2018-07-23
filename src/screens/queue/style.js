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
        width: width,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        borderWidth: 0.5,
        height: 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    },

    backButton: {
        marginLeft: 20,
        marginRight: 20
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 25
    },

    bodyContainer: {
        padding: 15
    },

    titleText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 20
    },

    infoContainer: {
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center'
    },

    triangleShape: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white'
    },

    queueNoText: {
        color: 'white',
        fontFamily: 'Ubuntu-M',
        fontSize: 25,
        marginRight: 5,
        textAlignVertical: 'bottom'
    },

    queueTitleText: {
        color: 'white',
        fontFamily: 'Ubuntu-M',
        fontSize: 45,
        marginBottom: -5
    },

    infoText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Ubuntu-M',
        marginRight: 5
    },

    timeText: {
        color: 'white',
        fontFamily: 'Ubuntu-BI',
        fontSize: 20
    },

    reserveText: {
        color: 'white',
        fontFamily: 'Ubuntu-BI',
        fontSize: 15
    },

    queueDescriptionText: {
        color: 'white',
        marginLeft: 40,
        fontFamily: 'Ubuntu-MI',
        fontSize: 15,
        marginBottom: 15
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10
    },

    buttonContainer: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    buttonText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    }
});

export default styles;