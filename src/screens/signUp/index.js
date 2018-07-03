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
            <LinearGradient colors={['#1E81CE', '#78B9EB']} style={styles.container}>

                <Text style={styles.placeHolderTextContainer}>FAST</Text>

                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <Text style={styles.headerTitleText}>REGISTER</Text>

                <View style={styles.bodyContainer}>
                    <TextInput
                        placeholder='USERNAME'
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
                
                <TouchableOpacity style={styles.doneButton}>
                    <Text style={{fontFamily: 'Ubuntu-M', color: '#1961A1', fontSize: 15}}>Done</Text>
                </TouchableOpacity>

                <Text style={styles.policyText}>By creating an account you are agreeing to FAST's User Agreement</Text>
            </LinearGradient>
        );
    }
}

export default SignUp;