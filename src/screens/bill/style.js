'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 20,
        marginTop: 15
    },

    diningContainer: {
        marginTop: 20,
    },

    diningHeader: {
        flexDirection: 'row',
        width: width * 0.9,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 20
    },

    diningContent: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 15
    },

    diningImage: {
        width: 100,
        height: 70,
        resizeMode: 'contain',
    },

    diningTextContainer: {
        flex: 1,
        marginTop: 10,
        marginLeft: 25
    },

    diningTitle: {
        fontFamily: 'Ubuntu-M',
        fontSize: 13
    },

    dininglocation: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 10
    },

    diningShareButton: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginBottom: 20,
    },

    orderContainer: {
        flex: 1,
        marginTop: -18,
        borderRadius: 20
    },

    orderHeader: {
        flexDirection: 'row',
        width: width * 0.9,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        backgroundColor: 'white',
        alignItems: 'center'
    },

    orderCount: {
        borderColor: '#1E81CE',
        borderWidth: 2,
        fontFamily: 'Ubuntu-M', 
        fontSize: 30, 
        color: '#1E81CE',
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 35,
        height: 40,
        marginRight: 20
    },

    detailContainer: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        width: width * 0.9,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },

    checkButtonContainer: {
        width: width * 0.6,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContainer: {
        width: width * 0.9,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    modalCloseButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },

    modalHeaderText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 25,
        marginTop: 25,
    },

    modalHeaderLine: {
        height: 0.5,
        width: width * 0.9,
        backgroundColor: '#D6D6D6',
        marginTop: 20
    },

    modalPaymentButtonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: width * 0.9
    },

    modalPaymentButton: {
        width: 60,
        height: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalPaymentButtonText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 15,
        color: '#1E81CE'
    },

    modalProceedButton: {
        width: width * 0.6,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;