import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import FollowingCard from './FollowingCard';
import Constants from '../../Lib/Constants';

import styles from './style.js';

const { Followings } = Constants

class Following extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/black_back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <Text style={styles.headerText}>Following</Text>
                {
                    Followings.map((follow, index) => {
                        return (
                            <FollowingCard content={follow} />
                        )
                    })
                }
            </ScrollView>
        );
    }
}

export default Following;