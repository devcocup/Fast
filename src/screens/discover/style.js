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

    navigationBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },

    backButton: {
        marginLeft: 20
    },

    navigationBarText: {
        marginLeft: 10,
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    },

    searchButton: {
        marginRight: 20,
    },

    headerContainer: {
        width: width,
        height: 120
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 25,
        color: 'white',
        marginLeft: 20,
        marginTop: 10
    },

    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    modalHeaderTitleText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 16,
        marginLeft: 20,
        marginRight: 'auto'
    },

    moreText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 10,
        color: '#2578DB',
        marginRight: 20
    }

});

export default styles;