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

class SignUp extends Component {
    render() {
        return (
            <LinearGradient colors={['#36D1DC', '#185A9D']} style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>New</Text>

                <View style={styles.bodyContainer}>
                    <TextInput
                        placeholder='FIRST NAME'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>
                        
                    <TextInput
                        placeholder='LAST NAME'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>

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
                
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={{'color': '#1961A1', 'fontSize': 15}}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.policyText}>By creating an account you are agreeing to FAST's User Agreement</Text>
            </LinearGradient>
        );
    }
}

export default SignUp;