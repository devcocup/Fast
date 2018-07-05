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

    headerContainer: {
        flexDirection: 'column',
    },

    menuButton: {
        position: 'absolute',
        right: 10,
        top: 10
    },    

    profileImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        resizeMode: 'cover',
        marginLeft: 20,
        marginTop: '20%'
    },

    headerImage: {
        height: 50,
        marginTop: '15%',
        marginLeft: -20,
        paddingLeft: 20
    },

    headerText: {
        color: 'white',
        fontFamily: 'Ubuntu-R',
        fontSize: 24,
        marginLeft: 20,
        marginTop: '-5%'
    },

    rewardContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },

    menuItems: {
        marginTop: 25,
        marginLeft: 20
    },

    menuItemContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    menuItemText: {
        color: '#393939',
        fontFamily: 'Ubuntu-R',
        fontSize: 15,
        marginLeft: 20
    },

    footer: {
        position: 'absolute',
        bottom: 20
    }
});

export default styles;