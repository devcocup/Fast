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
        alignItems: 'center',
        height: 190
    },

    backButton: {
        position: 'absolute',
        left: 20,
        top: 20
    },

    profileImage: {
        width: 65,
        height: 65,
        marginTop: 20,
        resizeMode: 'contain',
        borderRadius: 10
    },

    idText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 15,
        color: 'white',
        marginTop: 5
    },

    rewardContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },

    rewardImage: {
        resizeMode: 'contain',
        marginRight: 10
    },

    rewardText: {
        fontSize: 13,
        color: 'white'
    },

    infoContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },

    infoItem: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },

    buttonContainer: {
        width: width * 0.23,
        alignItems: 'center',
        marginTop: 20
    }
});

export default styles;