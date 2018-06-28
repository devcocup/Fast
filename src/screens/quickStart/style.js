'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    backButton: {
        backgroundColor: 'rgba(120, 132, 158, 0.16)',
        width: width * 0.4,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    nextButton: {
        backgroundColor: '#1961A0',
        width: width * 0.4,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 30
    }
});

export default styles;