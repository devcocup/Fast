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

class LogIn extends Component {
    render() {
        const NavigationActions = this.props.navigation;

        return (
            <LinearGradient colors={['#1E81CE', '#78B9EB']} style={styles.container}>                
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/login_logo.png')} style={styles.headerImage}/>
                    <Text style={styles.headerTitleText}>FAST</Text>
                </View>

                <Text style={styles.headerDescriptionText}>Let's Pay and Queue with FAST.</Text>

                <Text style={styles.placeHolderTextContainer}>FAST</Text>

                <View style={styles.bodyContainer}>
                    <View style={styles.emailContainer}>
                        <Image source={require('../../assets/images/login_username_icon.png')} style={styles.textInputIcon}/>
                        <TextInput
                            placeholder='USERNAME'
                            placeholderTextColor='#1E81CE'
                            keyboardType='email-address'
                            underlineColorAndroid='transparent' 
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.separateLine}/>
                    
                    <View style={styles.passwordContainer}>
                        <Image source={require('../../assets/images/login_password_icon.png')} style={styles.textInputIcon}/>
                        <TextInput
                            placeholder='PASSWORD'
                            placeholderTextColor='#1E81CE'
                            secureTextEntry={true}
                            underlineColorAndroid='transparent' 
                            style={styles.textInput}/>
                    </View>

                    <TouchableOpacity style={styles.loginButtonContainer} onPress={() => NavigationActions.navigate('Menu')}>
                        <Text style={{fontFamily: 'Ubuntu-M', color: 'white', fontSize: 15}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{marginTop: 25}} onPress={() => NavigationActions.navigate('ForgotPasswordScreen')}>
                    <Text style={{fontFamily: 'Ubuntu-LI', color: 'white', fontSize: 15}}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupContainer} onPress={() => NavigationActions.navigate('SignUpScreen')}>
                    <Text style={{fontFamily: 'Ubuntu-M', color: '#1961A1', fontSize: 15}}>New User?</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default LogIn;