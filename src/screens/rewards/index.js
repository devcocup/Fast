import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import RewardHistoryCard from './RewardHistoryCard';
import Constants from '../../Lib/Constants';

import styles from './style.js';

const { RewardHistories } = Constants

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date_selected: false,
            rating_selected: true
        }
    }

    datePress() {
        this.setState({
            date_selected: true,
            rating_selected: false
        })
    }

    ratePress() {
        this.setState({
            date_selected: false,
            rating_selected: true
        })
    }

    render() {
        const NavigationActions = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.goBack()}>
                    <Image source={require('../../assets/images/black_back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <Text style={styles.headerText}>View Reviews</Text>

                <View style={styles.buttonsContainer}>
                    <LinearGradient 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 1}} 
                        colors={this.state.date_selected ? ['#1E81CE', '#78B9EB'] : ['transparent', 'transparent']}
                        style={{borderRadius: 10, marginLeft: 25, marginRight: 25}}>
                        <TouchableOpacity 
                            style={[
                                styles.buttonContainer,
                                !this.state.date_selected ? {borderWidth: 1, borderColor: '#C1C1C1'} : null ]}
                                onPress={() => this.datePress()}>
                            <Text style={[styles.buttonText, this.state.date_selected? {color: 'white'} : {color: '#707070'}]}>Date</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient 
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 1}} 
                        colors={this.state.rating_selected ? ['#1E81CE', '#78B9EB'] : ['transparent', 'transparent']}
                        style={{borderRadius: 10, marginLeft: 25, marginRight: 25}}>
                        <TouchableOpacity
                            style={[
                                styles.buttonContainer,
                                !this.state.rating_selected ? {borderWidth: 1, borderColor: '#C1C1C1'} : null ]}
                                onPress={() => this.ratePress()}>
                            <Text style={[styles.buttonText, this.state.rating_selected? {color: 'white'} : {color: '#707070'}]}>Rating</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={styles.bodyContainer}>
                    <ScrollView>
                    {
                        RewardHistories.map((reward, index) => {
                            return (
                                <RewardHistoryCard content={reward} />
                            )
                        })
                    }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Rewards;