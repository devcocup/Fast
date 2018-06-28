import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class Start extends Component {
    render() {
        return (
            <LinearGradient colors={['#36D1DC', '#185A9D']} style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.headerImage}/>
                    <Text style={styles.headerText}>FAST</Text>
                </View>

                <Text style={styles.bodyText}>Let's Pay and Queue with FAST.</Text>
                
                <TouchableOpacity style={styles.loginButton} onPress={() => NavigationActions.login()}>
                    <Text style={{'color': '#1961A1', 'fontSize': 15}}>Log In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.facebookButton}>
                    <Text style={{'color': 'white', 'fontSize': 15}}>Facebook</Text>
                </TouchableOpacity>
                
                <Text style={[styles.bodyText, {'marginTop': '25%'}]}>New User?</Text>
                
                <TouchableOpacity style={styles.signupButton} onPress={() => NavigationActions.signup()}>
                    <Text style={{'color': '#1961A1', 'fontSize': 15}}>Sign Up</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default Start;