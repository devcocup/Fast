import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


import QRCodeScanner from 'react-native-qrcode-scanner';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

class Scan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <QRCodeScanner
                    showMarker
                    customMarker={<Image source={require('../../assets/images/custom_mark.png')} style={{marginTop: -200}}/>}
                />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'rgba(120, 132, 158, 0.16)'}]}>
                        <Text style={[styles.buttonText, {color: '#454F63'}]}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.buttonContainer}>
                            <Text style={[styles.buttonText, {color: 'white'}]}>SCAN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Scan;