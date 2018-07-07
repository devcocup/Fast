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

    backButton: {
        marginTop: 20,
        marginLeft: 20
    },

    headerText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 15
    }
});

export default styles;