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
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },

    ePaymentText: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    },

    ePaymentButtons: {
        flexDirection: 'row',
    },

    ePaymentButton: {
        borderRadius: 10,
        marginRight: 20
    },

    categoryContainer: {
        backgroundColor: 'white',
        marginTop: 20,
        paddingRight: 20
    },

    categoryButton: {
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
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
    },

    subCategorysContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingBottom: 10
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

    modalHeader: {
        flexDirection: 'row'
    },

    modalHeaderTitleText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 15,
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