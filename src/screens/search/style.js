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

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        marginTop: 10
    },

    backButton: {
        marginLeft: 20,
        marginRight: 20
    },

    searchBar: {
        flex: 1,
        marginRight: 20,
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRadius: 5
    },

    searhBarInput: {
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    buttonContainer: {
        height: 125,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontFamily: 'Ubuntu-M',
        fontSize: 14,
        marginTop: 15
    },

    bodyContainer: {
        marginTop: 20
    },

    titleText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 32,
        width: 160,
        color: '#686868',
        marginLeft: 20
    },

    popularContainer: {
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row'
    },

    popularButtonContainer: {
        backgroundColor: '#F1F1F1',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        padding: 10
    },

    popularButtonText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 15
    },

    subCategorysContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10
    },

    subCategoryContainer: {
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    subCategoryImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    },

    subCategoryText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 12
    },
});

export default styles;