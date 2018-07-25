import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

class Queue extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/black_back_icon.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Queue</Text>
                </View>

                <ScrollView style={styles.bodyContainer}>
                    <Text style={styles.titleText}>Queue ticket</Text>

                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#FF416C', '#EF7676']} style={styles.infoContainer}>
                        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 40}}>
                            <Text style={styles.queueNoText}>No.</Text>
                            <Text style={styles.queueTitleText}>A1101</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 35}}>
                            <Text style={styles.infoText}>Estimated Waiting time: </Text>
                            <Text style={styles.timeText}>5 - 10mins</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: 40}}>
                            <Text style={styles.infoText}>Reserved for: </Text>
                            <Text style={styles.reserveText}>4pax</Text>
                        </View>

                        <Text style={styles.queueDescriptionText}>You are currently 3rd in the queue.</Text>

                        <View style={[styles.triangleShape, {transform: [{rotate: '90deg'}]}]}/>
                        <View style={[styles.triangleShape, {right: 0, transform: [{rotate: '-90deg'}]}]}/>
                    </LinearGradient>

                    <Text style={{fontSize: 15, color: '#707070', marginTop: 10}}>Present your queue ticket to the counter when your number has been called.</Text>
                    <View style={{alignItems: 'center', marginTop: 10, padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 30}}>
                        <Image source={require('../../assets/images/home_suggestion_second.png')}/>
                        <Text style={{textAlign: 'center', fontSize: 14, marginTop: 5}}>You are in the queue for Crystal Jade Kitchen at Tampines Mall.</Text>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.buttonContainer}>
                                    <Text style={[styles.buttonText, {color: 'white'}]}>View E-Menu</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'rgba(120, 132, 158, 0.16)'}]} onPress={() => navigation.goBack()}>
                                <Text style={[styles.buttonText, {color: '#454F63'}]}>Cancel</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Queue;