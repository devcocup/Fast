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

    navigationBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },

    menuButton: {
        marginLeft: 20
    },

    profileButton: {
        marginRight: 20
    },

    emailButton: {
        marginRight: 20,
    },

    headerContainer: {
        width: width,
        height: 200
    },

    headerButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 140
    },

    headerButton: {
        flex: 1,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerButtonImage: {
        margin: 10
    },

    headerButtonText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 11,
        marginBottom: 5
    },

    ePaymentContainer: {
        marginTop: 30,
        paddingLeft: 20
    },

    ePaymentText: {
        padding: 10,
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    },

    ePaymentButtons: {
        flexDirection: 'row',
        marginLeft: 10
    },

    ePaymentButton: {
        borderRadius: 10,
        marginRight: 20
    },

    categoryContainer: {
        marginTop: 30,
        marginLeft: 10
    },

    categoryButton: {
        borderRadius: 10,
        padding: 10,
    },

    categoryImage: {
        padding: 10,
        width: 135,
        height: 90,
        flexDirection: 'column',
        justifyContent: 'flex-end'  
    },

    categoryText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 20,
        color: 'white'
    }

});

export default styles;