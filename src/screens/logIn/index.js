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

class LogIn extends Component {
    render() {
        return (
            <LinearGradient colors={['#36D1DC', '#185A9D']} style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.headerImage}/>
                    <Text style={styles.headerText}>FAST</Text>
                </View>

                <Text style={styles.bodyText}>Let's Pay and Queue with FAST.</Text>

                <View style={styles.bodyContainer}>
                    <TextInput
                        placeholder='EMAIL'
                        placeholderTextColor='white'
                        keyboardType='email-address'
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>

                    <TextInput
                        placeholder='PASSWORD'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>
                </View>
                
                <TouchableOpacity style={{'marginTop':'25%'}}>
                    <Text style={{'color': '#1961A1', 'fontSize': 15}}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{'marginTop': 25}} onPress={() => NavigationActions.forgot()}>
                    <Text style={{'color': 'white', 'fontSize': 15, 'fontStyle': 'italic'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default LogIn;