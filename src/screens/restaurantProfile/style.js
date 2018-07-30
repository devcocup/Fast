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
        width: width,
        height: 200,
        resizeMode: 'contain'
    },

    headerButtonsContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },

    backButton: {
        width: 20,
        height: 15,
        resizeMode: 'contain',
        marginLeft: 10
    },

    likeButton: {
        width: 23,
        height: 22,
        resizeMode: 'contain',
        marginRight: 10
    },

    headerBottomContainer: {
        position: 'absolute',
        width: width,
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 10
    },

    headerTitleText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 23,
        color: 'white',
        marginLeft: 20
    },

    headerReviewContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerReviewImage: {
        marginLeft: 20,
        marginRight: 25,
        resizeMode: 'contain'
    },

    headerReviewText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 8,
        color: 'white'
    },

    locationContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D8D8D',
        alignItems: 'center',
        overflow: 'hidden'
    },

    locationInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    locationText: {
        fontSize: 13,
        marginLeft: 10
    },

    callButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    mapView: {
        marginTop: 5,
        width: '75%',
        height: 120,
        borderRadius: 20
    },

    descriptionContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D8D8D'
    },

    descriptionTitleText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 14,
        marginBottom: 20
    },

    descriptionText: {
        fontSize: 14,
        color: '#212121'
    },

    promotionContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D8D8D',
    },

    promotionTitleText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 14
    },

    promotions: {
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },

    eMenuContainer: {
        marginTop: 20,
        width: '65%',
        height: 50,
        alignSelf: 'center'
    },

    eMenuButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        height: '100%'
    },

    eMenuButtonText: {
        fontSize: 15,
        fontFamily: 'Ubuntu-M',
        color: 'white'
    },

    reviewContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20
    },

    reviewTitleText: {
        fontFamily: 'Ubuntu-B',
        fontSize: 14,
        marginBottom: 10
    },

    reviewByText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 12,
        marginBottom: 20
    },

    reviewMessageText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 12
    }

});

export default styles;