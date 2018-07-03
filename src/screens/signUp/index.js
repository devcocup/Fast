import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-datepicker';

import styles from './style.js';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

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

                    <View style={styles.phoneNumberContainer}>
                        <Text style={styles.phoneText}>MOBILE NUMBER</Text>
                        <PhoneInput initialCountry={'sg'} style={{marginTop: 8, marginBottom: 5}} textStyle={{fontFamily: 'Nunito-Light', color: 'white'}}/>
                    </View>

                    <DatePicker
                        style={styles.birthDayCotainer}
                        date={this.state.date}
                        placeholder="BIRTHDAY"
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate="2026-01-01"
                        showIcon={false}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                alignItems: 'flex-start',
                                marginTop: 40,
                                marginBottom: 30
                            },
                            placeholderText: { color: 'white', fontFamily: 'Nunito-Light'},
                            dateText: {color: 'white', fontFamily: 'Nunito-Light'}
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>
                
                <TouchableOpacity style={styles.doneButton} onPress={() => NavigationActions.verify()}>
                    <Text style={{fontFamily: 'Ubuntu-M', color: '#1961A1', fontSize: 15}}>Done</Text>
                </TouchableOpacity>

                <Text style={styles.policyText}>By creating an account you are agreeing to FAST's User Agreement</Text>
            </LinearGradient>
        );
    }
}

export default SignUp;