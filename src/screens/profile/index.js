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

import styles from './style.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#1E81CE', '#78B9EB']} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                        <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/>
                    </TouchableOpacity> 

                    <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage}/>
                    
                    <Text style={styles.idText}>ID: carriewong</Text>
                    
                    <View style={styles.rewardContainer}>
                        <Image source={require('../../assets/images/menu_gold_icon.png')} style={styles.rewardImage}/>
                        <Text style={styles.rewardText}>500</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.infoItem}>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 13}}>3</Text>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 10}}>Following</Text>
                        </View>

                        <View style={{width: 0.5, backgroundColor: '#D6D6D6'}}/>

                        <View style={styles.infoItem}>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 13}}>1</Text>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 10}}>Review</Text>
                        </View>

                        <View style={{width: 0.5, backgroundColor: '#D6D6D6'}}/>

                        <View style={styles.infoItem}>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 13}}>$37.50</Text>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 10}}>Amount spend</Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', padding: 10, alignItems: 'center'}}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => NavigationActions.editProfile()}>
                        <Image source={require('../../assets/images/profile_edit.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>Edit Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/images/profile_my_wallet.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>My Wallet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/images/profile_order_history.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>Order History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/images/profile_view_reviews.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>View Reviews</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/images/profile_rewards_history.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>Rewards History</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: 0.5, backgroundColor: '#E9E9E9'}}/>

                <View style={{padding: 10}}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Image source={require('../../assets/images/profile_send_feedback.png')} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                        <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>Send Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Profile;