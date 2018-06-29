import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class SideMenu extends Component {
    render() {
        return (
            <LinearGradient colors={['#36D1DC', '#185A9D']} style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/menu_icon_white.png')}/>
                </TouchableOpacity>
                
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/images/menu_header.png')} style={styles.headerImage}/>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage}/>
                    <Text style={styles.headerText}>Carrie Wong</Text>
                    <View style={styles.rewardContainer}>
                        <Image source={require('../../assets/images/gold_icon.png')} style={{marginLeft: 20, width: 18, height: 18}}/>
                        <Text style={{color: 'white', fontSize: 13, marginLeft: 10}}>500</Text>
                    </View>
                </View>

                <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => {}}>
                        <Image source={require('../../assets/images/home_icon.png')} style={styles.menuItemImage}/>
                        <Text style={styles.menuItemText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => {}}>
                        <Image source={require('../../assets/images/order_icon.png')} style={styles.menuItemImage}/>
                        <Text style={styles.menuItemText}>Order History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => {}}>
                        <Image source={require('../../assets/images/favour_icon.png')} style={styles.menuItemImage}/>
                        <Text style={styles.menuItemText}>Favourite</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => {}}>
                        <Image source={require('../../assets/images/reward_icon.png')} style={styles.menuItemImage}/>
                        <Text style={styles.menuItemText}>Rewards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItemContainer} onPress={() => {}}>
                        <Image source={require('../../assets/images/profile_icon.png')} style={styles.menuItemImage}/>
                        <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{color: 'rgba(255, 255, 255, 0.56)', fontSize: 16}}>About Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{color: 'rgba(255, 255, 255, 0.56)', fontSize: 16}}>Privacy Policy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 20, marginTop: 10}} onPress={() => {}}>
                        <Text style={{color: 'white', fontSize: 16}}>Log Out</Text>
                    </TouchableOpacity>
                </View>

                
            </LinearGradient>
        );
    }
}

export default SideMenu;