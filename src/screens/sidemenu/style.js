'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: height * 0.07,
        // marginBottom: height * 0.07,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 20,
        // height: height * 0.85
    },

    menuButton: {
        position: 'absolute',
        width: 20,
        height: 15,
        right: 10,
        top: 10
    },

    headerContainer: {
        flexDirection: 'column',
        marginTop: '30%'
    },

    headerImage: {
        height: 35,
    },

    profileImage: {
        position: 'absolute',
        width: 65,
        height: 65,
        borderRadius: 10,
        resizeMode: 'cover',
        left: 20,
        top: -40
    },

    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20
    },

    rewardContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },

    menuItems: {
        marginTop: 30,
        marginLeft: 20
    },

    menuItemContainer: {
        flexDirection: 'row',
        marginTop: 10
    },

    menuItemImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    menuItemText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10
    },

    footer: {
        position: 'absolute',
        bottom: 20
    }
});

export default styles;