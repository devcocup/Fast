import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class SideMenu extends Component {
    render() {
        const NavigationActions = this.props.navigation;
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#1E81CE', '#78B9EB']} style={styles.headerContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => NavigationActions.goBack()}>
                        <Image source={require('../../assets/images/menu_icon_white.png')}/>
                    </TouchableOpacity>
                    
                    <View style={styles.headerContainer}>
                        <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage}/>
                        <ImageBackground source={require('../../assets/images/menu_header.png')} style={styles.headerImage}>
                            <Text style={styles.headerText}>carriewong</Text>
                            <View style={styles.rewardContainer}>
                                <Image source={require('../../assets/images/menu_gold_icon.png')} style={{marginLeft: 20, width: 18, height: 18}}/>
                                <Text style={{color: 'white', fontSize: 13, marginLeft: 10}}>500</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </LinearGradient>

                <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => NavigationActions.navigate('ProfileScreen')}>
                        <Image source={require('../../assets/images/menu_profile_icon.png')}/>
                        <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => NavigationActions.navigate('OrderHistoryScreen')}>
                        <Image source={require('../../assets/images/menu_order_history_icon.png')}/>
                        <Text style={styles.menuItemText}>Order History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => NavigationActions.navigate('FollowingScreen')}>
                        <Image source={require('../../assets/images/menu_follow_icon.png')}/>
                        <Text style={styles.menuItemText}>Following</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => NavigationActions.navigate('RewardsScreen')}>
                        <Image source={require('../../assets/images/menu_reward_icon.png')}/>
                        <Text style={styles.menuItemText}>Rewards</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{fontFamily: 'Ubuntu-R', color: 'rgba(81, 80, 80, 0.56)', fontSize: 14}}>About Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{fontFamily: 'Ubuntu-R', color: 'rgba(81, 80, 80, 0.56)', fontSize: 14}}>Privacy Policy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{fontFamily: 'Gibson', color: '#515050', fontSize: 16}}>Log Out</Text>
                    </TouchableOpacity>
                </View>           
            </View>
        );
    }
}

export default SideMenu;