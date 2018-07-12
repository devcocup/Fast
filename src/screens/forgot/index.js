import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class ForgotPassword extends Component {
    render() {
        const NavigationActions = this.props.navigation;

        return (
            <LinearGradient colors={['#1E81CE', '#78B9EB']} style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.goBack()}>
                    <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/login_logo.png')} style={styles.headerImage}/>
                    <Text style={styles.headerTitleText}>FAST</Text>
                </View>

                <Text style={styles.headerDescriptionText}>Let's Pay and Queue with FAST.</Text>

                <Text style={styles.placeHolderTextContainer}>FAST</Text>
                
                <Text style={styles.noticeText}>We will send you a email for password reset. Please check your email</Text>

                <TextInput
                    placeholder='EMAIL'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    underlineColorAndroid='transparent' 
                    style={styles.textInput}/>
                
                <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
                    <Text style={{fontFamily: 'Ubuntu-M', color: '#1961A1', fontSize: 15}}>SEND</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default ForgotPassword;