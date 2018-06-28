import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class ForgotPassword extends Component {
    render() {
        return (
            <LinearGradient colors={['#36D1DC', '#185A9D']} style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/back.png')}/>
                </TouchableOpacity>

                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.headerImage}/>
                    <Text style={styles.headerText}>FAST</Text>
                </View>

                <Text style={styles.bodyText}>Let's Pay and Queue with FAST.</Text>
                
                <Text style={styles.noticeText}>We will send you a email for password reset. Please check your</Text>

                <TextInput
                    placeholder='EMAIL'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    underlineColorAndroid='transparent' 
                    style={styles.textInput}/>
                
                <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
                    <Text style={{'color': '#1961A1', 'fontSize': 15}}>SEND</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default ForgotPassword;