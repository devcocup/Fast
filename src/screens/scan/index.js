import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';


import QRCodeScanner from 'react-native-qrcode-scanner';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

class Scan extends Component {

    onSuccess(e) {
        Alert.alert(
            'QRCode detected!',
            e.data,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.props.navigation.navigate('QueueTab')}
            ],
            {cancelable: true}
        )
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                    showMarker
                    customMarker={<Image source={require('../../assets/images/custom_mark.png')} style={{marginTop: -200}}/>}
                />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'rgba(120, 132, 158, 0.16)'}]} onPress={() => navigation.goBack()}>
                        <Text style={[styles.buttonText, {color: '#454F63'}]}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.navigate('QueueTab')}>
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