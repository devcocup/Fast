import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import NotificationCard from './NotificationCard';
import Constants from '../../Lib/Constants';

import styles from './style.js';

const { NotificationEnties } = Constants

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const NavigationActions = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.goBack()}>
                    <Image source={require('../../assets/images/black_back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <Text style={styles.headerText}>Notification</Text>
                {
                    NotificationEnties.map((follow, index) => {
                        return (
                            <NotificationCard content={follow} odd={index%2} />
                        )
                    })
                }
            </ScrollView>
        );
    }
}

export default Notification;