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

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'carriewong',
            email: 'carriewong@gmail.com',
            phone: '+6591234567'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.headerContainer}>

                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                        <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profileImageButton}>
                        <Image source={require('../../assets/images/profile.jpg')} style={{borderRadius: 10, resizeMode: 'contain', width: 65, height: 65}}/>
                    </TouchableOpacity>

                    <Text style={styles.idText}>ID: carriewong</Text>

                    <TouchableOpacity style={styles.editButton}>
                        <Text style={{fontFamily: 'Ubuntu-M', fontSize: 15, color: 'white'}}>Edit</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.bodyContainer}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>USERNAME</Text>
                        <TextInput
                            value={this.state.username}
                            underlineColorAndroid='transparent' 
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>EMAIL</Text>
                        <TextInput
                            value={this.state.email}
                            keyboardType='email-address'
                            underlineColorAndroid='transparent'
                            style={styles.textInput}/>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>MOBILE NUMBER</Text>
                        <PhoneInput value={this.state.phone} style={{marginTop: 8, marginBottom: 5}} textStyle={{fontFamily: 'Nunito-Light', fontSize: 13}}/>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>BIRTHDAY</Text>
                        <DatePicker
                            style={styles.birthDayCotainer}
                            date={this.state.date}
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
                                dateText: {fontSize: 13, fontFamily: 'Nunito-Light'}
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.facebookButtonContainer}>
                    <Text style={{fontFamily: 'Ubuntu-M', fontSize: 15, color: 'white'}}>Connect with Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default EditProfile;